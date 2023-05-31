import type { FC, ReactNode } from 'react';
import { UploadForm } from '../../components';
import { type AppUrl } from '../../constants';
import { useSwitchLanguage } from '../../hooks';
import { ResponsiveLayout } from '../../layouts';
import type { Language, ImageUploader, ImageValidator } from '../../types';
import styles from './UploadTemplate.module.css';

type Props = {
  language: Language;
  imageValidator: ImageValidator;
  imageUploader: ImageUploader;
  catImage: ReactNode;
  uploadCallback?: () => void;
  onClickCreatedLgtmImage?: () => void;
  onClickMarkdownSourceCopyButton?: () => void;
  appUrl?: AppUrl;
};

export const UploadTemplate: FC<Props> = ({
  language,
  imageValidator,
  imageUploader,
  catImage,
  uploadCallback,
  onClickCreatedLgtmImage,
  onClickMarkdownSourceCopyButton,
  appUrl,
}) => {
  const { isLanguageMenuDisplayed, onClickLanguageButton, onClickOutSideMenu } =
    useSwitchLanguage();

  return (
    <div onClick={onClickOutSideMenu} aria-hidden="true">
      <ResponsiveLayout
        language={language}
        isLanguageMenuDisplayed={isLanguageMenuDisplayed}
        onClickLanguageButton={onClickLanguageButton}
        currentUrlPath="/upload"
      >
        <UploadForm
          language={language}
          imageValidator={imageValidator}
          imageUploader={imageUploader}
          uploadCallback={uploadCallback}
          onClickCreatedLgtmImage={onClickCreatedLgtmImage}
          onClickMarkdownSourceCopyButton={onClickMarkdownSourceCopyButton}
          appUrl={appUrl}
        />
        <div className={styles['image-wrapper']}>{catImage}</div>
      </ResponsiveLayout>
    </div>
  );
};
