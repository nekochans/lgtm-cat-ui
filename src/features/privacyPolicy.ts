import { assertNever } from '../utils';

import type { Language, LinkAttribute } from '../types';

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
