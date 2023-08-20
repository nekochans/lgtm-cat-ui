import { createPrivacyPolicyLinksFromLanguages } from '../../privacyPolicy';

describe('src/features/privacyPolicy.ts createPrivacyPolicyLinksFromLanguages TestCase', () => {
  it('should return an English link', () => {
    const language = 'en';

    const expected = {
      text: 'Privacy Policy',
      link: '/privacy',
    };

    expect(createPrivacyPolicyLinksFromLanguages(language)).toStrictEqual(
      expected,
    );
  });

  it('should return a Japanese link', () => {
    const language = 'ja';

    const expected = {
      text: 'プライバシーポリシー',
      link: '/privacy',
    };

    expect(createPrivacyPolicyLinksFromLanguages(language)).toStrictEqual(
      expected,
    );
  });
});
