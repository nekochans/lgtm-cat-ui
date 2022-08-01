import Image from 'next/image';
import React, { FC } from 'react';
import styled from 'styled-components';

import { UploadForm } from '../../components';
import { useSwitchLanguage } from '../../hooks/useSwitchLanguage';
import { ResponsiveLayout } from '../../layouts';
import { Language } from '../../types/language';
import { ImageUploader, ImageValidator } from '../../types/lgtmImage';

import cat from './images/cat.webp';

const ImageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const CatImage = () => (
  <ImageWrapper>
    <Image
      src={cat.src}
      width="302px"
      height="302px"
      alt="Cat"
      priority={true}
    />
  </ImageWrapper>
);

export type Props = {
  language: Language;
  imageValidator: ImageValidator;
  imageUploader: ImageUploader;
};

export const UploadTemplate: FC<Props> = ({
  language,
  imageValidator,
  imageUploader,
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
        <CatImage />
      </ResponsiveLayout>
    </div>
  );
};
