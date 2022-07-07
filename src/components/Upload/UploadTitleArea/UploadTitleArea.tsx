import React from 'react';
import styled from 'styled-components';

import { Language } from '../../../types/language';
import assertNever from '../../../utils/assertNever';

const StyledUploadTitleArea = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: #362e2b;
`;

type Props = {
  language: Language;
};

type Text =
  | '猫ちゃん画像をアップロードしてLGTM画像を作れます🐱'
  | 'You can upload cat images to create LGTM images🐱';

const text = (language: Language): Text => {
  switch (language) {
    case 'ja':
      return '猫ちゃん画像をアップロードしてLGTM画像を作れます🐱';
    case 'en':
      return 'You can upload cat images to create LGTM images🐱';
    default:
      return assertNever(language);
  }
};

export const UploadTitleArea: React.FC<Props> = ({ language }) => (
  <StyledUploadTitleArea>{text(language)}</StyledUploadTitleArea>
);
