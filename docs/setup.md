# ローカル開発環境構築手順

コントリビューター向けの開発環境構築手順です。

Windows でも環境構築は可能ですが、このドキュメントは Mac OS 向けに書かれています。

## Node.js のインストール

18 系の最新を利用して下さい。

複数プロジェクトで異なる Node.js のバージョンを利用する可能性があるので、Node.js 自体をバージョン管理出来るようにしておくのが無難です。

以下は [asdf](https://asdf-vm.com/) を使った設定例です。

```bash
asdf install nodejs 18.12.1

asdf local nodejs 18.12.1
```

## 依存 package のインストール

`node -v` で目的のバージョンが表示されるようになったら、以下を実行して下さい。

`npm ci` で依存 package をインストールします。

# npm script の説明

## Build

`npm run build` で npm に ReactComponent を Package として公開出来る形に Build を行います。

この Build が通らない場合は CI に失敗するようになっています。

## Linter

`npm run lint` で Linter を実行します。

ここでエラーが残っている場合は CI が通らないようになっています。

## Formatter

`npm run format` でソースコードのフォーマットを実行します。

Linter のエラーはこちらのコマンドである程度自動修正が可能です。

## Test

`npm run test` でテストコードを実行します。

現状実装されているのは、Jest を使ったテストです。

## Storybook の起動

`npm run storybook` を実行します。

`http://localhost:6006` でアクセス出来ます。

Component の動作確認は基本的にこの Storybook 上で行います。

## Storybook を静的な HTML ファイルとしてアウトプットする

以下のコマンドを実行します。

```bash
npm run build-storybook
```

`storybook-static/` に HTML ファイルが吐き出されている事を確認出来ます。

`index.html` をブラウザで開くと Storybook を確認する事が出来ます。

コミット毎に [chromatic](https://www.chromatic.com/builds?appId=62729802bbcc7d004a663d4c) にデプロイが行われるようになっています。
