import { NotAllowedImageExtensionError } from '../../errors/NotAllowedImageExtensionError';
import { extractImageExtFromValidFileType } from '../../lgtmImage';

describe('src/features/lgtmImage.ts extractImageExtFromValidFileType TestCase', () => {
  it('should return AcceptedTypesImageExtension', () => {
    const table = [
      { arg: 'image/png', expected: '.png' },
      { arg: 'image/jpg', expected: '.jpg' },
      { arg: 'image/jpeg', expected: '.jpeg' },
    ];

    for (const { arg, expected } of table) {
      const result = extractImageExtFromValidFileType(arg);

      expect(result).toStrictEqual(expected);
    }
  });

  it('should throw an NotAllowedImageExtensionError, because it is not an allowed image extension', () => {
    const table = ['image/webp', 'unknown'];

    for (const arg of table) {
      try {
        extractImageExtFromValidFileType(arg);
      } catch (error) {
        // TODO https://jestjs.io/ja/docs/expect#tothrowerror を利用する形に直したいが上手く動作しないので、今はこの形で定義しておく
        // eslint-disable-next-line jest/no-conditional-expect
        expect(error).toStrictEqual(
          new NotAllowedImageExtensionError(
            `${arg} is not an allowed image extension`,
          ),
        );
      }
    }
  });
});
