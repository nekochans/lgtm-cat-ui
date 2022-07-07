import React, { FC } from 'react';

import { UploadForm } from '../../components';
import { Language } from '../../types/language';

export type Props = {
  language: Language;
};

export const UploadTemplate: FC<Props> = ({ language }) => (
  <>
    <UploadForm language={language} />
  </>
);
