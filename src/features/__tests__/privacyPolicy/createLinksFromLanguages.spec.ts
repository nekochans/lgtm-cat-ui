import { createLinksFromLanguages } from '../../privacyPolicy';

describe('src/features/privacyPolicy.ts createLinksFromLanguages TestCase', () => {
  it('should return an English link', () => {
    const language = 'en';

    const expected = {
      text: 'Privacy Policy',
      link: '/privacy',
    };

    expect(createLinksFromLanguages(language)).toStrictEqual(expected);
  });

  it('should return a Japanese link', () => {
    const language = 'ja';

    const expected = {
      text: 'プライバシーポリシー',
      link: '/privacy',
    };

    expect(createLinksFromLanguages(language)).toStrictEqual(expected);
  });
});
