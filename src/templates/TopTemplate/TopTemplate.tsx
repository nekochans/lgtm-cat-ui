import { useSnapshot } from 'valtio';

import { LgtmImages } from '../../components';
import { CatButtonGroup } from '../../components/Button/CatButtonGroup';
import { AppUrl } from '../../constants/url';
import { useSwitchLanguage } from '../../hooks';
import { ResponsiveLayout } from '../../layouts';
import {
  lgtmImageStateSelector,
  updateLgtmImages,
} from '../../stores/valtio/lgtmImage';

import { AppDescriptionArea } from './AppDescriptionArea';

import type {
  Language,
  ChangeLanguageCallback,
  CatImagesFetcher,
  LgtmImage,
} from '../../types';
import type { FC } from 'react';

type Props = {
  language: Language;
  lgtmImages: LgtmImage[];
  randomCatImagesFetcher: CatImagesFetcher;
  newArrivalCatImagesFetcher: CatImagesFetcher;
  appUrl?: AppUrl;
  clipboardMarkdownCallback?: () => void;
  fetchRandomCatImagesCallback?: () => void;
  fetchNewArrivalCatImagesCallback?: () => void;
  changeLanguageCallback?: ChangeLanguageCallback;
};

// eslint-disable-next-line max-lines-per-function
export const TopTemplate: FC<Props> = ({
  language,
  lgtmImages,
  randomCatImagesFetcher,
  newArrivalCatImagesFetcher,
  appUrl,
  clipboardMarkdownCallback,
  fetchRandomCatImagesCallback,
  fetchNewArrivalCatImagesCallback,
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

  const snap = useSnapshot(lgtmImageStateSelector());

  const onClickFetchRandomCatButton = async () => {
    const lgtmImagesList = await randomCatImagesFetcher();

    updateLgtmImages(lgtmImagesList);

    if (fetchRandomCatImagesCallback) {
      fetchRandomCatImagesCallback();
    }
  };

  const onClickFetchNewArrivalCatButton = async () => {
    const lgtmImagesList = await newArrivalCatImagesFetcher();

    updateLgtmImages(lgtmImagesList);

    if (fetchNewArrivalCatImagesCallback) {
      fetchNewArrivalCatImagesCallback();
    }
  };

  const fetchedLgtmImagesList = snap.lgtmImages ? snap.lgtmImages : lgtmImages;

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
        <CatButtonGroup
          onClickFetchRandomCatButton={onClickFetchRandomCatButton}
          onClickFetchNewArrivalCatButton={onClickFetchNewArrivalCatButton}
        />
        <LgtmImages
          images={fetchedLgtmImagesList as LgtmImage[]}
          appUrl={appUrl}
          callback={clipboardMarkdownCallback}
        />
      </ResponsiveLayout>
    </div>
  );
};
