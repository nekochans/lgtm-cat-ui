# GTM、GA4 を利用した計測について

GTM（Google Tag Manager）と GA4（Google Analytics 4）を利用して各 UI の Button がクリックされたかどうかを計測しています。

本ドキュメントでは GTM や GA4 等の設定方法を記載します。

ステージング用の GTM、GA4 プロパティを用意しています。

GTM、GA4 の測定 ID などは [Vercel の環境変数](https://vercel.com/nekochans/lgtm-cat-frontend/settings/environment-variables) を見て下さい。

# 計測手法の基本方針

以下の 2 つの方法を利用します。

- [カスタムイベントを利用した計測](https://zenn.dev/keitakn/articles/nextjs-google-tag-manager#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AE%E9%80%81%E4%BF%A1)
- [カスタムデータ属性を利用した計測](https://zenn.dev/keitakn/scraps/1b0bdea51150e7#comment-191789fdc5a19a)

カスタムデータ属性を利用する場合は計測したい Component にカスタムデータ属性 `data-gtm-click` を追加しておきます。

`data-gtm-click` の型情報に関しては https://github.com/nekochans/lgtm-cat-ui/blob/main/src/types/gtm.ts に定義します。

計測したい Component に対してイベントが取れているかどうかをステージング上の GA で確認してください。

必ずステージング上で計測が出来ている事を確認した後に本番に GTM のタグを反映してください。

またカスタムイベントを利用する場合は対象 Component にコールバック関数を受け取れるように改修を行う必要があります。
