import type { FC } from 'react';
import { ErrorContent, type ErrorContentProps } from '../../components';
import { useSwitchLanguage } from '../../hooks';
import { ResponsiveLayout } from '../../layouts';

type Props = ErrorContentProps & {
  currentUrlPath: string;
};

export const ErrorTemplate: FC<Props> = ({
  type,
  language,
  catImage,
  currentUrlPath,
}) => {
  const { isLanguageMenuDisplayed, onClickLanguageButton, onClickOutSideMenu } =
    useSwitchLanguage();

  return (
    <div onClick={onClickOutSideMenu} aria-hidden="true">
      <ResponsiveLayout
        language={language}
        isLanguageMenuDisplayed={isLanguageMenuDisplayed}
        onClickLanguageButton={onClickLanguageButton}
        currentUrlPath={currentUrlPath}
      >
        <ErrorContent
          type={type}
          language={language}
          catImage={catImage}
          shouldDisplayBackToTopButton={true}
        />
      </ResponsiveLayout>
    </div>
  );
};
