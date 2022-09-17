import { createTermsOfUseLinksFromLanguages } from '../../termsOfUse';

describe('src/features/termsOfUse.ts createTermsOfUseLinksFromLanguages TestCase', () => {
  it('should return an English link', () => {
    const language = 'en';

    const expected = {
      text: 'Terms of Use',
      link: '/terms',
    };

    expect(createTermsOfUseLinksFromLanguages(language)).toStrictEqual(
      expected,
    );
  });

  it('should return a Japanese link', () => {
    const language = 'ja';

    const expected = {
      text: '利用規約',
      link: '/terms',
    };

    expect(createTermsOfUseLinksFromLanguages(language)).toStrictEqual(
      expected,
    );
  });
});
