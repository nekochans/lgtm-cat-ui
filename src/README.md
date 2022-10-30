# 基本方針

[Figma](https://www.figma.com/file/0cG0cKDjmmPpWTVjkwmOqG/LGTM) のデザインを元に component を作成します。

アトミックデザインの用語が出てきますが、アトミックデザインに準拠している訳ではありません。

Component に関しては基本的にはアトミックデザインでいうところの `Templates` 相当の Component を外部公開します。

その他の関数や型定義などは必要な物だけを Package 外に公開します。

# ディレクトリ構成について

各ディレクトリの役割について記載します。

まだまだ発展途上のアプリケーションなので、今後もより良い形にリファクタリングを継続していきます。

# `src` 以下のディレクトリ

## `index.ts` の作成について

各ディレクトリ毎に `index.ts` を作成して、そこから外のディレクトリに公開したい関数や型定義だけを export するようにします。

これは export の範囲を限定可する事でリファクタリング時の影響範囲を小さくする事が主な目的です。

ちなみに `src/index.ts` で export されている関数や Component が Package の外に公開されます。

`src/index.ts` に記載するファイルは慎重に検討する必要があります。

## `export default` について

以下の記事にもありますが、主にリファクタリング面や IDE のサポート面で不利になる可能性があるので `export default` を利用しない方針とします。

- [なぜ default export を使うべきではないのか？](https://engineering.linecorp.com/ja/blog/you-dont-need-default-export/)
- [Avoid Export Default](https://typescript-jp.gitbook.io/deep-dive/main-1/defaultisbad)

## components

純粋な関数型 Component を格納する為のディレクトリです。

出来る限り `props` にのみ依存する Component になるのが理想です。

Component の内部で React hooks を利用する事は問題ありません。

また Component は `styled-components` で作成しているので、`styled-components` にも依存しています。

一部 `next/future/image` に依存しているものも存在します。

Component 名と同様のディレクトリ名を作成して `index.ts` を使って外部公開が必要な Component だけを export するようにします。

## constants

アプリケーション全体で利用する定数を格納します。

定数なので演算処理などを入れないようにします。

また外部ライブラリには依存せずに、順数な TypeScript のオブジェクト、または関数として実装します。

## features

[bulletproof-react](https://github.com/alan2207/bulletproof-react) のように `features` の配下に `components` などをまとめる設計もありますが、本プリケーションはそれほど機能が多い訳ではないので、本アプリケーションにおける `features` の役割はあくまでも、各 Component で利用する共通機能を格納する場所になります。

ここに定義されている関数は各 Component で頻繁に利用される事はもちろん、これらの機能の一部は Package 外にも公開する事もあります。

また外部ライブラリには依存せずに、順数な TypeScript のオブジェクト、または関数として実装します。

### features/errors

ビジネス上意味のあるエラーオブジェクトを定義します。

TypeScript の汎用エラーは使わずに何のエラーなのか分かりやすい名前をつけます。

## hooks

独自定義した Custom Hooks を格納します。

`features` や `stores` の機能に一部依存しています。

## images

Component で利用する画像ファイルを格納します。

## layouts

レイアウト用の Component を格納します。

## stores

状態管理用のファイルを格納するディレクトリです。

現状は [valtio](https://github.com/pmndrs/valtio) という軽量なステート管理用ライブラリを利用してステート管理を行っています。

## styles

共通利用する CSS を格納します。

本プロジェクトでは `styled-components` を利用しているので `import { css } from 'styled-components';` を利用した共通 CSS を格納しています。

## templates

アトミックデザインで言うところの `Templates` が格納されます。

アトミックデザインから用語を拝借しましたが、本プロジェクトではアトミックデザインに準拠している訳ではありません。

主にここに定義されている Component が Package 外に公開される事になります。

Package 利用者側が利用方法を理解出来る程度に Storybook も厚めに作成する必要があります。

## types

各 Component で共通利用する型定義を格納します。

Package の利用者にとっても重要な情報になるので、一部の型定義は Package 外にも公開されています。

## utils

ちょっとした便利機能を格納します。

ただしここには本当にビジネスロジック上意味を持たない、どのようなアプリケーションでも利用するような汎用的な機能だけを格納するようにお願いします。

`utils` への機能追加を行う前に `features` に定義出来ないか検討を行うようにお願いします。

現状では [never 型を使った網羅性チェック](https://typescriptbook.jp/reference/statements/never#never%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E7%B6%B2%E7%BE%85%E6%80%A7%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF) を行う為の `assertNever` 関数や sleep を行う為の `sleep` が定義されています。

## その他

### テストコード

各ディレクトリの同階層に `__tests__` ディレクトリを作成し、その中にテストコード用のファイルを作成します。

### Storybook

「Component 名」 + `.stories.tsx` で命名します。

本プロジェクトは Component を提供する為の Package なので、Storybook の重要度は高くなっています。
