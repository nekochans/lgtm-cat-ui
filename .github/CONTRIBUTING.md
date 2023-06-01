# はじめに

[ローカル開発環境構築手順](https://github.com/nekochans/lgtm-cat-ui/blob/main/docs/setup.md) を参考にローカル PC 上に開発環境を構築してから以降をお読み下さい。

# 開発からリリースまでの流れ

## 1. feature ブランチを作成して機能開発

ブランチの運用ルールですが [GitHub flow](https://guides.github.com/introduction/flow/) に準拠しています。

まずは feature ブランチを作成して機能開発の準備を行います。

開発が必要な機能は GitHub issue として登録されていますので、それを元にブランチを作成します。

ブランチ名は `feature/issue` + `{GitHubのissue番号}` + `/任意の文字列` のように命名します。

例えば GitHub issue が https://github.com/nekochans/lgtm-cat-ui/issues/46 であれば以下のようになります。

```
git switch -c feature/issue46/modal-translation
git switch feature/issue46/modal-translation
```

`/modal-translation` の部分は任意の文字列です。

1 つの GitHub issue を解決する為に複数の PR を出す事もあるので、このような命名規則になっています。

PR テンプレートに従い必要な応報を入力します。

大きな PR はレビュアーへの負担が大きく、不具合等の見落としが多くなる傾向があるので、ある程度の細かく出す事を推奨しています。

一度に複数の機能を開発しようとすると大きな PR になる事が多いので、1 つの PR で解決する問題は 1 つにする事を意識すると適切な大きさになります。

以下がサンプル PR になります。

https://github.com/nekochans/lgtm-cat-ui/pull/88

以下の記事によると 200 行以内の PR がレビュアーの負担も大きく不具合も見つけやすいそうです。

https://smallbusinessprogramming.com/optimal-pull-request-size/

1 つの目安として参考にすると良いでしょう。

開発の際は [ディレクトリ構成の説明](https://github.com/nekochans/lgtm-cat-ui/blob/main/src/README.md) を参考にします。

### Git のコミットルールについて

https://github.com/nekochans/nekochans/wiki/Rules-of-Git-commit を参照して下さい。

### GTM + GA + GA4 を利用した計測を行えるようにする

作成した Component にはカスタムデータ属性 `data-gtm-click` の追加をお願いします。

GA などの詳しいルールに関しては https://github.com/nekochans/lgtm-cat-ui/blob/main/docs/gtm.md に記載してあります。

## 2. PR のレビューを依頼する

準備が出来たら Reviewers にレビューして欲しい人を追加して PR を `Ready for review` 状態にします。

その前の以下のセルフチェックをお願いします。

- PR のタイトルは分かりやすい事
- PR が大きすぎないか（大きい場合はいくつかの PR に分割する）
- PR テンプレートに従って必要な情報が記載されている事
- Storybook が追加されている事
- 必要に応じて Jest によるテストが追加されている事
- CI が通っている事

また開発メンバーの 1 人である [keitakn](https://github.com/keitakn) が書いた [GitHub のコードレビューを受ける際に気をつける事](https://zenn.dev/keitakn/articles/github-code-review-reviewee) を見て頂けると嬉しいです。

## 3. main ブランチへのマージ

PR で 1 名以上から `Approve` をもらえたら `main` ブランチへのマージをお願いします。

この時点ではまだリリースは行われません。

## 4. リリース用 PR の作成

リリースを行うタイミングでリリース用の PR を作成します。

GitHubPackage にリリースを行う為には以下の内容を変更する必要があります。

- `package.json` の `version` を変更
- `package-lock.json` の `version` を変更（2 箇所あるので注意）
- [セマンティック バージョニング](https://semver.org/lang/ja/) 形式の Git タグの追加

これらの変更を手動で行うと間違いが起こる可能性があるので以下のコマンドを利用する事をオススメします。

```bash
## パッチバージョンアップ時に利用
npm version --no-git-tag-version patch

## マイナーバージョンアップ時に利用
npm version --no-git-tag-version minor

## メジャーバージョンアップ時に利用
npm version --no-git-tag-version major
```

`--no-git-tag-version` オプションを利用しているのは GitTag をこの時点では作成したくないからです。

パッチ、マイナー、メジャーの各バージョンアップの使い分けですが、以下のように行います。

- パッチバージョンアップ
  - package 利用者から見て利用方法が変わっていない場合はパッチバージョンアップを実施する
  - .e.g. ちょっとしたバグ修正
  - .e.g. ドキュメントの追加、利用者に関係がないテストコードの追加や Storybook の修正等
- マイナーバージョンアップ
  - package 利用者から見て新しい機能が追加されているが、後方互換性が維持されている場合はマイナーバージョンアップを実施する
    - .e.g. 新しい Component を追加した
    - .e.g. 既存 Component に新しい任意パラメータとして props を追加した
- メジャーバージョンアップ
  - 後方互換性がない破壊的な変更が行われた場合はメジャーバージョンアップを実施する
    - .e.g. 既存の Component 名を変更した
    - .e.g. `react` などの `peerDependencies` に含まれる package をメジャーバージョンアップした場合

リリースには複数の PR を含んでも問題はありませんが、ある程度機能が使えるようになったら細かい単位でのリリースを推奨しております。

リリース用ブランチは `release/` + `v1.0.0` のように命名します。

以下が例になります。

https://github.com/nekochans/lgtm-cat-ui/pull/181

準備が出来たら Reviewers にレビューして欲しい人を追加して PR を `Ready for review` 状態にします。

基本的に今までの PR でレビューが行われているハズなので、管理者であればリリース用 PR はマージ出来ます。

PR で 1 名以上から `Approve` をもらえたら `main` ブランチへのマージをお願いします。

この時点ではまだリリースは行われません。

## 5. リリースページの作成

以下の手順でリリースページを作成します。

以下がリリースページのサンプルです。

https://github.com/nekochans/lgtm-cat-ui/releases/tag/v1.0.0

本リポジトリのトップページから Releases の一覧に進みます。

![create_release1](https://user-images.githubusercontent.com/11032365/194574231-66453f39-e554-4437-b27b-1b17d718b673.png)

「Draft a new release」を押下します。

![create_release2](https://user-images.githubusercontent.com/11032365/194575269-b43796c9-f5ba-46d9-a069-d089953db011.png)

`Choose a tag` から対象の Git タグを作成します。

GitTag はリリースブランチ名で利用した物と同じ値にします。

![create_release3](https://user-images.githubusercontent.com/11032365/194575289-58c7e8f1-e94b-4715-a3b4-a165ccec1929.png)

`Release title` を記載します。

`Generate release notes` を押下すると前回リリースとの差分を生成したりリリース内容の PR を自動的に貼り付けてくれるのでオススメです。

もちろん以下の PR のように自分で説明を追加しても問題ありません。

https://github.com/nekochans/lgtm-cat-frontend/releases/tag/v2.1.0

`Publish release` を押下すると GitHubPackages へのリリースが開始されます。

![create_release4](https://user-images.githubusercontent.com/11032365/194575310-4e36fc2b-c86a-4eee-8ed1-ac1cd2630c0c.png)

https://github.com/nekochans/lgtm-cat-ui/actions/workflows/npm-publish.yml を確認するとリリースの状況が確認出来ます。

https://github.com/nekochans/lgtm-cat-ui/pkgs/npm/lgtm-cat-ui を確認すると新しいバージョンがリリースされている事を確認出来ます。

以上が release までの流れになります。
