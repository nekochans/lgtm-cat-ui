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
});
