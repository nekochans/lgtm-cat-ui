import { MouseEvent } from 'react';
import { useSnapshot } from 'valtio';

import {
  commonStateSelector,
  updateIsLanguageMenuDisplayed,
  updateLanguage,
} from '../stores/valtio/common';

import type { ChangeLanguageCallback, Language } from '../types';

const languageEn = 'en';

const languageJa = 'ja';

export const useSwitchLanguage = (
  language: Language,
  changeLanguageCallback?: ChangeLanguageCallback,
) => {
  const snap = useSnapshot(commonStateSelector());

  const { isLanguageMenuDisplayed } = snap;

  const selectedLanguage = snap.language ? snap.language : language;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClickEn = (event: MouseEvent<HTMLDivElement>) => {
    updateLanguage(languageEn);

    if (changeLanguageCallback) {
      changeLanguageCallback(languageEn);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClickJa = (event: MouseEvent<HTMLDivElement>) => {
    updateLanguage(languageJa);

    if (changeLanguageCallback) {
      changeLanguageCallback(languageJa);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClickLanguageButton = (event: MouseEvent<HTMLDivElement>) => {
    updateIsLanguageMenuDisplayed(!isLanguageMenuDisplayed);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClickOutSideMenu = (event: MouseEvent<HTMLDivElement>) => {
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
