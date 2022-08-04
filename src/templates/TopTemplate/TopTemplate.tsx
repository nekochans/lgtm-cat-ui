import { LgtmImages } from '../../components';
import { AppDescriptionArea } from '../../components/AppDescriptionArea';
import { CatButtonGroup } from '../../components/Button/CatButtonGroup';
import { useSwitchLanguage } from '../../hooks';
import { ResponsiveLayout } from '../../layouts';

import type { Language } from '../../types/language';
import type { LgtmImage } from '../../types/lgtmImage';
import type { FC } from 'react';

type Props = {
  language: Language;
  lgtmImages: LgtmImage[];
};

export const TopTemplate: FC<Props> = ({ language, lgtmImages }) => {
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
        onClickJa={onClickJa}
        onClickEn={onClickEn}
        isLanguageMenuDisplayed={isLanguageMenuDisplayed}
        onClickLanguageButton={onClickLanguageButton}
      >
        <AppDescriptionArea language={selectedLanguage} />
        <CatButtonGroup />
        <LgtmImages images={lgtmImages} />
      </ResponsiveLayout>
    </div>
  );
};
