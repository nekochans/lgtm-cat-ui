import { assertNever } from '../utils';

import type { Language, LinkAttribute } from '../types';

export const createTermsOfUseLinksFromLanguages = (
  language: Language,
): LinkAttribute => {
  const link = '/terms';

  switch (language) {
    case 'en':
      return {
        text: 'Terms of Use',
        link,
      };
    case 'ja':
      return {
        text: '利用規約',
        link,
      };
    default:
      return assertNever(language);
  }
};
