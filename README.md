# lgtm-cat-ui

[![ci](https://github.com/nekochans/lgtm-cat-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/nekochans/lgtm-cat-ui/actions/workflows/ci.yml)
[![npm publish](https://github.com/nekochans/lgtm-cat-ui/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/nekochans/lgtm-cat-ui/actions/workflows/npm-publish.yml)
[![chromatic](https://github.com/nekochans/lgtm-cat-ui/actions/workflows/chromatic.yml/badge.svg)](https://github.com/nekochans/lgtm-cat-ui/actions/workflows/chromatic.yml)

https://lgtmeow.com の UIComponent を管理する為の package です。

本 Package は https://lgtmeow.com でのみ利用する事を想定しています。

以下から最新の Storybook を確認出来ます。

https://main--62729802bbcc7d004a663d4c.chromatic.com

`https://<branch>--62729802bbcc7d004a663d4c.chromatic.com` のように `main` の部分を任意のブランチ名にする事で対象ブランチの Storybook を確認出来ます。

## Getting Started

本 Package を利用する為の事前準備について説明します。

### 事前準備

本 package を利用したいプロジェクトルートに `.npmrc` を配置します。

内容は以下の通りです。

```
@nekochans:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

`ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` の部分にはご自身の GitHub のパーソナルトークンを設定してください。

必要な権限は `read:packages` のみです。

Vercel 上で private package を利用する設定を行う為には以下を参考にします。

https://vercel.com/docs/runtimes#advanced-usage/advanced-node-js-usage/private-npm-modules-for-node-js

`.npmrc` の内容を `NPM_RC` として Vercel 上の環境変数に指定してください。

#### 依存パッケージのインストール

本リポジトリは以下のパッケージに依存しています。

```bash
npm install next react react-dom styled-components
```

利用するバージョンは `package.json` の `peerDependencies` を参照してください。

#### Next.js 側のアプリケーションに styledComponents の設定

公式ドキュメントに従い `next.config.js` に styledComponents を利用する為の設定を行います。

https://nextjs.org/docs/advanced-features/compiler#styled-components

#### 本パッケージのインストール

以下でインストールを行います。

```bash
npm install @nekochans/lgtm-cat-ui@2.0.4
```

`2.0.4` の部分は実際に利用するバージョンに置き換えてください。

`npm install @nekochans/lgtm-cat-ui` でもインストールは可能ですがトラブルを避ける為にもバージョンを完全に固定出来る `npm install @nekochans/lgtm-cat-ui@2.0.4` のような指定方法がオススメです。

### 利用出来る Component

利用出来るのは https://github.com/nekochans/lgtm-cat-ui/blob/main/src/index.ts で `export` されている Component、関数が利用出来ます。

基本的には `Template` Component のみが export されています。

必要な Props の渡し方は各 Storybook を見て下さい。

- https://github.com/nekochans/lgtm-cat-ui/blob/main/src/templates/TopTemplate/TopTemplate.stories.tsx
- https://github.com/nekochans/lgtm-cat-ui/blob/main/src/templates/UploadTemplate/UploadTemplate.stories.tsx
- https://github.com/nekochans/lgtm-cat-ui/blob/main/src/templates/TermsOrPrivacyTemplate/TermsOrPrivacyTemplate.stories.tsx
- https://github.com/nekochans/lgtm-cat-ui/blob/main/src/templates/ErrorTemplate/ErrorTemplate.stories.tsx
