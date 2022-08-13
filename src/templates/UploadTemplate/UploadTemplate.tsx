import styled from 'styled-components';

import { UploadForm } from '../../components';
import { useSwitchLanguage } from '../../hooks';
import { ResponsiveLayout } from '../../layouts';
import {
  ChangeLanguageCallbackFunctions,
  Language,
} from '../../types/language';
import { ImageUploader, ImageValidator } from '../../types/lgtmImage';

import type { FC, ReactNode } from 'react';

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 302px 302px 302px;
  @media (max-width: 767px) {
    grid-template-columns: 302px;
    justify-content: center;
  }
`;

type Props = {
  language: Language;
  imageValidator: ImageValidator;
  imageUploader: ImageUploader;
  catImage: ReactNode;
  changeLanguageCallbackFunctions?: ChangeLanguageCallbackFunctions;
};

export const UploadTemplate: FC<Props> = ({
  language,
  imageValidator,
  imageUploader,
  catImage,
  changeLanguageCallbackFunctions,
}) => {
  const {
    isLanguageMenuDisplayed,
    selectedLanguage,
    onClickEn,
    onClickJa,
    onClickLanguageButton,
    onClickOutSideMenu,
  } = useSwitchLanguage(language, changeLanguageCallbackFunctions);

  return (
    <div onClick={onClickOutSideMenu} aria-hidden="true">
      <ResponsiveLayout
        language={selectedLanguage}
        onClickJa={onClickJa}
        onClickEn={onClickEn}
        isLanguageMenuDisplayed={isLanguageMenuDisplayed}
        onClickLanguageButton={onClickLanguageButton}
      >
        <UploadForm
          language={selectedLanguage}
          imageValidator={imageValidator}
          imageUploader={imageUploader}
        />
        <ImageWrapper>{catImage}</ImageWrapper>
      </ResponsiveLayout>
    </div>
  );
};
