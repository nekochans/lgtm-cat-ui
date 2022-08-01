import { useSwitchLanguage } from '../../hooks/useSwitchLanguage';
import { ResponsiveLayout } from '../../layouts';

import type { Language } from '../../types/language';
import type { FC, ReactNode } from 'react';

type Props = {
  language: Language;
  children: ReactNode;
};

export const ResponsiveLayoutContainer: FC<Props> = ({
  language,
  children,
}) => {
  const {
    isLanguageMenuDisplayed,
    selectedLanguage,
    onClickEn,
    onClickJa,
    onClickLanguageButton,
    onClickOutSideMenu,
  } = useSwitchLanguage(language);

  return (
    <div onClick={onClickOutSideMenu} aria-hidden="true">
      <ResponsiveLayout
        language={selectedLanguage}
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
