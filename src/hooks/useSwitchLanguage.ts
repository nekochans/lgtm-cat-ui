import type { MouseEvent, MouseEventHandler } from 'react';
import { useSnapshot } from 'valtio';

import {
  commonStateSelector,
  updateIsLanguageMenuDisplayed,
  updateLanguage,
} from '../stores';

import type { ChangeLanguageCallback, Language } from '../types';

const languageEn = 'en';

const languageJa = 'ja';

type UseSwitchLanguageResponse = {
  isLanguageMenuDisplayed: boolean;
  selectedLanguage: Language;
  onClickEn: MouseEventHandler<HTMLButtonElement>;
  onClickJa: MouseEventHandler<HTMLButtonElement>;
  onClickLanguageButton: MouseEventHandler<HTMLDivElement>;
  onClickOutSideMenu: MouseEventHandler<HTMLDivElement>;
};

export const useSwitchLanguage = (
  language: Language,
  changeLanguageCallback?: ChangeLanguageCallback
): UseSwitchLanguageResponse => {
  const snap = useSnapshot(commonStateSelector());

  const { isLanguageMenuDisplayed } = snap;

  const selectedLanguage = snap.language ? snap.language : language;

  const onClickEn: MouseEventHandler<HTMLButtonElement> = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    event: MouseEvent<HTMLButtonElement>
  ) => {
    updateLanguage(languageEn);

    if (changeLanguageCallback) {
      changeLanguageCallback(languageEn);
    }
  };

  const onClickJa: MouseEventHandler<HTMLButtonElement> = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    event: MouseEvent<HTMLButtonElement>
  ) => {
    updateLanguage(languageJa);

    if (changeLanguageCallback) {
      changeLanguageCallback(languageJa);
    }
  };

  const onClickLanguageButton: MouseEventHandler<HTMLDivElement> = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    event: MouseEvent<HTMLDivElement>
  ) => {
    updateIsLanguageMenuDisplayed(!isLanguageMenuDisplayed);
  };

  const onClickOutSideMenu: MouseEventHandler<HTMLDivElement> = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    event: MouseEvent<HTMLDivElement>
  ) => {
    // メニューの外側をクリックしたときだけメニューを閉じる
    if (isLanguageMenuDisplayed) {
      updateIsLanguageMenuDisplayed(false);
    }
  };

  return {
    isLanguageMenuDisplayed,
    selectedLanguage,
    onClickEn,
    onClickJa,
    onClickLanguageButton,
    onClickOutSideMenu,
  };
};
