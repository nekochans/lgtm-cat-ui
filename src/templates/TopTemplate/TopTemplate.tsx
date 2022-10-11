import type { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';

import { ErrorContent, LgtmImages } from '../../components';
import { CatButtonGroup } from '../../components/Button';
import { AppUrl } from '../../constants';
import {
  errorType,
  NewArrivalCatImagesFetcherError,
  RandomCatImagesFetcherError,
} from '../../features';
import { useSwitchLanguage } from '../../hooks';
import { ResponsiveLayout } from '../../layouts';
import {
  lgtmImageStateSelector,
  updateIsFailedFetchLgtmImages,
  updateLgtmImages,
} from '../../stores';

import type { Language, CatImagesFetcher, LgtmImage } from '../../types';
import { AppDescriptionArea } from './AppDescriptionArea';
import { CatRandomCopyButtonWrapper } from './CatRandomCopyButtonWrapper';

const _Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  gap: 32px;
`;

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

  const snap = useSnapshot(lgtmImageStateSelector());

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
        'failed to newArrivalCatImagesFetcher'
      );
    }
  };

  const fetchedLgtmImagesList = snap.lgtmImages ? snap.lgtmImages : lgtmImages;

  const { isFailedFetchLgtmImages } = snap;

  const { imageUrl } =
    fetchedLgtmImagesList[
      Math.floor(Math.random() * fetchedLgtmImagesList.length)
    ];

  return (
    <div onClick={onClickOutSideMenu} aria-hidden="true">
      <ResponsiveLayout
        language={language}
        isLanguageMenuDisplayed={isLanguageMenuDisplayed}
        onClickLanguageButton={onClickLanguageButton}
        currentUrlPath="/"
      >
        <_Wrapper>
          <AppDescriptionArea language={language} />
          <CatRandomCopyButtonWrapper
            appUrl={appUrl}
            imageUrl={imageUrl}
            callback={catRandomCopyCallback}
          />
          <CatButtonGroup
            onClickFetchRandomCatButton={onClickFetchRandomCatButton}
            onClickFetchNewArrivalCatButton={onClickFetchNewArrivalCatButton}
          />
          {isFailedFetchLgtmImages === true ? (
            <ErrorContent
              type={errorType.internalServerError}
              language={language}
              catImage={errorCatImage}
              shouldDisplayBackToTopButton={false}
            />
          ) : (
            <LgtmImages
              images={fetchedLgtmImagesList as LgtmImage[]}
              appUrl={appUrl}
              callback={clipboardMarkdownCallback}
            />
          )}
        </_Wrapper>
      </ResponsiveLayout>
    </div>
  );
};
