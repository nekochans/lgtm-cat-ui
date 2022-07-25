import React, { FC } from 'react';

import { UploadForm } from '../../components';
import { Language } from '../../types/language';
import { ImageUploader, ImageValidator } from '../../types/lgtmImage';

export type Props = {
  language: Language;
  imageValidator: ImageValidator;
  imageUploader: ImageUploader;
};

export const UploadTemplate: FC<Props> = ({
  language,
  imageValidator,
  imageUploader,
}) => (
  <>
    <UploadForm
      language={language}
      imageValidator={imageValidator}
      imageUploader={imageUploader}
    />
  </>
);
