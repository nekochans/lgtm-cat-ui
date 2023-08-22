import type { FC, ReactNode } from 'react';
import { type AppUrl } from '../../constants';
import {
  NewArrivalCatImagesFetcherError,
  RandomCatImagesFetcherError,
} from '../../features';
import { useSwitchLanguage } from '../../hooks';
import { ResponsiveLayout } from '../../layouts';
import { updateIsFailedFetchLgtmImages, updateLgtmImages } from '../../stores';
import type { Language, CatImagesFetcher, LgtmImage } from '../../types';
import { LgtmImagesContents } from './LgtmImagesContents';

type Props = {
  language: Language;
  lgtmImages: LgtmImage[];
  randomCatImagesFetcher: CatImagesFetcher;
  newArrivalCatImagesFetcher: CatImagesFetcher;
  errorCatImage: ReactNode;
  appUrl?: AppUrl;
  clipboardMarkdownCallback?: () => void;
  fetchRandomCatImagesCallback?: () => void;
  fetchNewArrivalCatImagesCallback?: () => void;
  catRandomCopyCallback?: () => void;
};

// eslint-disable-next-line max-lines-per-function
export const TopTemplate: FC<Props> = ({
  language,
  lgtmImages,
  randomCatImagesFetcher,
  newArrivalCatImagesFetcher,
  errorCatImage,
  appUrl,
  clipboardMarkdownCallback,
  fetchRandomCatImagesCallback,
  fetchNewArrivalCatImagesCallback,
  catRandomCopyCallback,
}) => {
  const { isLanguageMenuDisplayed, onClickLanguageButton, onClickOutSideMenu } =
    useSwitchLanguage();

  const onClickFetchRandomCatButton = async () => {
    try {
      const lgtmImagesList = await randomCatImagesFetcher();

      updateLgtmImages(lgtmImagesList);
      updateIsFailedFetchLgtmImages(false);

      if (fetchRandomCatImagesCallback) {
        fetchRandomCatImagesCallback();
      }
    } catch (error) {
      updateIsFailedFetchLgtmImages(true);
      if (error instanceof Error) {
        throw new RandomCatImagesFetcherError(error.message);
      }

      throw new RandomCatImagesFetcherError('failed to randomCatImagesFetcher');
    }
  };

  const onClickFetchNewArrivalCatButton = async () => {
    try {
      const lgtmImagesList = await newArrivalCatImagesFetcher();

      updateLgtmImages(lgtmImagesList);
      updateIsFailedFetchLgtmImages(false);

      if (fetchNewArrivalCatImagesCallback) {
        fetchNewArrivalCatImagesCallback();
      }
    } catch (error) {
      updateIsFailedFetchLgtmImages(true);
      if (error instanceof Error) {
        throw new NewArrivalCatImagesFetcherError(error.message);
      }

      throw new RandomCatImagesFetcherError(
        'failed to newArrivalCatImagesFetcher',
      );
    }
  };

  return (
    <div onClick={onClickOutSideMenu} aria-hidden="true">
      <ResponsiveLayout
        language={language}
        isLanguageMenuDisplayed={isLanguageMenuDisplayed}
        onClickLanguageButton={onClickLanguageButton}
        currentUrlPath="/"
      >
        <LgtmImagesContents
          language={language}
          lgtmImages={lgtmImages}
          errorCatImage={errorCatImage}
          onClickFetchRandomCatButton={onClickFetchRandomCatButton}
          onClickFetchNewArrivalCatButton={onClickFetchNewArrivalCatButton}
          appUrl={appUrl}
          catRandomCopyCallback={catRandomCopyCallback}
          clipboardMarkdownCallback={clipboardMarkdownCallback}
        />
      </ResponsiveLayout>
    </div>
  );
};
