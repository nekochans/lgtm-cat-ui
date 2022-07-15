import React from 'react';
import { useSnapshot } from 'valtio';

import { ResponsiveLayout } from '../../layouts';
import {
  headerStateSelector,
  updateIsLanguageMenuDisplayed,
  updateLanguage,
} from '../../stores/valtio/header';

type Props = {
  children: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onClickEn = (event: React.MouseEvent<HTMLDivElement>) => {
  updateLanguage('en');
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onClickJa = (event: React.MouseEvent<HTMLDivElement>) => {
  updateLanguage('ja');
};

export const ResponsiveLayoutContainer: React.FC<Props> = ({ children }) => {
  const snap = useSnapshot(headerStateSelector());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClickLanguageButton = (event: React.MouseEvent<HTMLDivElement>) => {
    updateIsLanguageMenuDisplayed(!snap.isLanguageMenuDisplayed);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClickOutSideMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    // メニューの外側をクリックしたときだけメニューを閉じる
    if (snap.isLanguageMenuDisplayed) {
      updateIsLanguageMenuDisplayed(false);
    }
  };

  const { language } = snap;

  const { isLanguageMenuDisplayed } = snap;

  return (
    <div onClick={onClickOutSideMenu} aria-hidden="true">
      <ResponsiveLayout
        language={language}
        isLanguageMenuDisplayed={isLanguageMenuDisplayed}
        onClickLanguageButton={onClickLanguageButton}
        onClickEn={onClickEn}
        onClickJa={onClickJa}
      >
        {children}
      </ResponsiveLayout>
    </div>
  );
};
