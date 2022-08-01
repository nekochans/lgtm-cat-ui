import { proxy } from 'valtio';

import type { Language } from '../../types/language';

export type CommonState = {
  language: Language;
  isLanguageMenuDisplayed: boolean;
};

const commonState = proxy<CommonState>({
  language: 'ja',
  isLanguageMenuDisplayed: false,
});

export const updateLanguage = (language: Language): void => {
  commonState.language = language;
};

export const updateIsLanguageMenuDisplayed = (
  isLanguageMenuDisplayed: boolean,
): void => {
  commonState.isLanguageMenuDisplayed = isLanguageMenuDisplayed;
};

export const headerStateSelector = (): CommonState => commonState;
