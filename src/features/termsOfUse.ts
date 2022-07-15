import { Language } from '../types/language';
import { LinkAttribute } from '../types/link';
import assertNever from '../utils/assertNever';

export const createLinksFromLanguages = (language: Language): LinkAttribute => {
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
