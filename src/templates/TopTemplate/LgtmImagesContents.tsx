import type { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import { ErrorContent, LgtmImages } from '../../components';
import { CatButtonGroup } from '../../components/Button';
import { AppUrl } from '../../constants';
import { errorType } from '../../features';
import { lgtmImageStateSelector } from '../../stores';
import type { Language, LgtmImage } from '../../types';
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
  errorCatImage: ReactNode;
  onClickFetchRandomCatButton: () => Promise<void>;
  onClickFetchNewArrivalCatButton: () => Promise<void>;
  appUrl?: AppUrl;
  clipboardMarkdownCallback?: () => void;
  fetchRandomCatImagesCallback?: () => void;
  fetchNewArrivalCatImagesCallback?: () => void;
  catRandomCopyCallback?: () => void;
};

export const LgtmImagesContents: FC<Props> = ({
  language,
  lgtmImages,
  errorCatImage,
  onClickFetchRandomCatButton,
  onClickFetchNewArrivalCatButton,
  appUrl,
  catRandomCopyCallback,
  clipboardMarkdownCallback,
}) => {
  const snap = useSnapshot(lgtmImageStateSelector());

  const fetchedLgtmImagesList = snap.lgtmImages ? snap.lgtmImages : lgtmImages;

  const { isFailedFetchLgtmImages } = snap;

  const { imageUrl } =
    fetchedLgtmImagesList[
      Math.floor(Math.random() * fetchedLgtmImagesList.length)
    ];

  return (
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
  );
};
