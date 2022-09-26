export class RandomCatImagesFetcherError extends Error {
  constructor(error?: string) {
    super(error);
    this.name = new.target.name;

    // 以下の記述があるので念の為、if文を追加しておきたいので @typescript-eslint/strict-boolean-expressions を無効化
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Error
    // >標準外の V8 の関数で、 Error インスタンスに stack プロパティを生成します。
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
