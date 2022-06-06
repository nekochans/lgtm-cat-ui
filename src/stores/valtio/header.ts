import { proxy } from 'valtio';

import type { Language } from '../../types/language';

export type HeaderState = {
  language: Language;
  isLanguageMenuDisplayed: boolean;
};

const headerState = proxy<HeaderState>({
  language: 'ja',
  isLanguageMenuDisplayed: false,
});

export const updateLanguage = (language: Language): void => {
  headerState.language = language;
};

export const updateIsLanguageMenuDisplayed = (
  isLanguageMenuDisplayed: boolean,
): void => {
  headerState.isLanguageMenuDisplayed = isLanguageMenuDisplayed;
};

export const headerStateSelector = (): HeaderState => headerState;
