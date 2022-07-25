/* eslint-disable no-magic-numbers */
import { createFailureResult, isFailureResult } from '../../result';

describe('src/features/result.ts createFailureResult TestCase', () => {
  class SampleError extends Error {
    constructor(error?: string) {
      super(error);
      this.name = new.target.name;

      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }

  it('should return a return type with an error inside', () => {
    const error = new SampleError();

    const result = createFailureResult<SampleError>(error);

    expect(isFailureResult(result)).toBeTruthy();
    expect(result.value.name).toStrictEqual('SampleError');
  });

  it('should return a return type that encompasses the set data type', () => {
    const list = ['cat', 'kitten'];

    const result = createFailureResult<string[]>(list);

    expect(isFailureResult(result)).toBeTruthy();
    expect(result.value.length).toStrictEqual(2);
    expect(result.value[0]).toStrictEqual('cat');
    expect(result.value[1]).toStrictEqual('kitten');
  });
});
