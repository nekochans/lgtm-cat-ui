import { proxy } from 'valtio';

import type { Language } from '../../types/language';

export type CommonState = {
  isLanguageMenuDisplayed: boolean;
  language?: Language;
};

const commonState = proxy<CommonState>({
  isLanguageMenuDisplayed: false,
});

export const updateIsLanguageMenuDisplayed = (
  isLanguageMenuDisplayed: boolean,
): void => {
  commonState.isLanguageMenuDisplayed = isLanguageMenuDisplayed;
};

export const updateLanguage = (language: Language): void => {
  commonState.language = language;
};

export const commonStateSelector = (): CommonState => commonState;
