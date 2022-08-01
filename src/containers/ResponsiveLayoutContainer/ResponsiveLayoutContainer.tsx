import { useSnapshot } from 'valtio';

import { ResponsiveLayout } from '../../layouts';
import {
  headerStateSelector,
  updateIsLanguageMenuDisplayed,
  updateLanguage,
} from '../../stores/valtio/common';

import type { FC, ReactNode, MouseEvent } from 'react';

type Props = {
  children: ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onClickEn = (event: MouseEvent<HTMLDivElement>) => {
  updateLanguage('en');
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onClickJa = (event: MouseEvent<HTMLDivElement>) => {
  updateLanguage('ja');
};

export const ResponsiveLayoutContainer: FC<Props> = ({ children }) => {
  const snap = useSnapshot(headerStateSelector());

  const { language, isLanguageMenuDisplayed } = snap;

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
