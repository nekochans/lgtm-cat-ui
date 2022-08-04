import { useSnapshot } from 'valtio';

import { LgtmImages } from '../../components';
import { CatButtonGroup } from '../../components/Button/CatButtonGroup';
import { useSwitchLanguage } from '../../hooks';
import { ResponsiveLayout } from '../../layouts';
import {
  lgtmImageStateSelector,
  updateLgtmImages,
} from '../../stores/valtio/lgtmImage';

import { AppDescriptionArea } from './AppDescriptionArea';

import type { Language } from '../../types/language';
import type { CatImagesFetcher, LgtmImage } from '../../types/lgtmImage';
import type { FC } from 'react';

type Props = {
  language: Language;
  lgtmImages: LgtmImage[];
  randomCatImagesFetcher: CatImagesFetcher;
  newArrivalCatImagesFetcher: CatImagesFetcher;
};

export const TopTemplate: FC<Props> = ({
  language,
  lgtmImages,
  randomCatImagesFetcher,
  newArrivalCatImagesFetcher,
}) => {
  const {
    isLanguageMenuDisplayed,
    selectedLanguage,
    onClickEn,
    onClickJa,
    onClickLanguageButton,
    onClickOutSideMenu,
  } = useSwitchLanguage(language);

  const snap = useSnapshot(lgtmImageStateSelector());

  const onClickFetchRandomCatButton = async () => {
    const lgtmImagesList = await randomCatImagesFetcher();

    updateLgtmImages(lgtmImagesList);
  };

  const onClickFetchNewArrivalCatButton = async () => {
    const lgtmImagesList = await newArrivalCatImagesFetcher();

    updateLgtmImages(lgtmImagesList);
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
        <LgtmImages images={fetchedLgtmImagesList as LgtmImage[]} />
      </ResponsiveLayout>
    </div>
  );
};
