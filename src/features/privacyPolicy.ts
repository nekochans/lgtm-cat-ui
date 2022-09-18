import { Language } from '../types/language';
import { LinkAttribute } from '../types/link';
import { assertNever } from '../utils/assertNever';

export const createPrivacyPolicyLinksFromLanguages = (
  language: Language,
): LinkAttribute => {
  const link = '/privacy';

  switch (language) {
    case 'en':
      return {
        text: 'Privacy Policy',
        link,
      };
    case 'ja':
      return {
        text: 'プライバシーポリシー',
        link,
      };
    default:
      return assertNever(language);
  }
};
