import { proxy } from 'valtio';

import type { Language } from '../../types';

export type CommonState = {
  isLanguageMenuDisplayed: boolean;
  language?: Language;
};

const commonState = proxy<CommonState>({
  isLanguageMenuDisplayed: false,
});

export const updateIsLanguageMenuDisplayed = (
  isLanguageMenuDisplayed: boolean
): void => {
  commonState.isLanguageMenuDisplayed = isLanguageMenuDisplayed;
};

export const commonStateSelector = (): CommonState => commonState;
