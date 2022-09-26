import type { FC } from 'react';
import { ErrorContent, type ErrorContentProps } from '../../components';
import { useSwitchLanguage } from '../../hooks';
import { ResponsiveLayout } from '../../layouts';

import type { ChangeLanguageCallback } from '../../types';

type Props = ErrorContentProps & {
  changeLanguageCallback?: ChangeLanguageCallback;
};

export const ErrorTemplate: FC<Props> = ({
  type,
  language,
  catImage,
  changeLanguageCallback,
}) => {
  const {
    isLanguageMenuDisplayed,
    selectedLanguage,
    onClickEn,
    onClickJa,
    onClickLanguageButton,
    onClickOutSideMenu,
  } = useSwitchLanguage(language, changeLanguageCallback);

  return (
    <div onClick={onClickOutSideMenu} aria-hidden="true">
      <ResponsiveLayout
        language={selectedLanguage}
        onClickJa={onClickJa}
        onClickEn={onClickEn}
        isLanguageMenuDisplayed={isLanguageMenuDisplayed}
        onClickLanguageButton={onClickLanguageButton}
      >
        <ErrorContent
          type={type}
          language={selectedLanguage}
          catImage={catImage}
          shouldDisplayBackToTopButton={true}
        />
      </ResponsiveLayout>
    </div>
  );
};
