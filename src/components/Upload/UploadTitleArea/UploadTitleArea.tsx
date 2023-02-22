import type { FC } from 'react';
import styled from 'styled-components';
import { mixins } from '../../../styles';
import { type Language } from '../../../types';
import { assertNever } from '../../../utils';

const _Wrapper = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: ${mixins.colors.text};
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

export const UploadTitleArea: FC<Props> = ({ language }) => (
  <_Wrapper>{text(language)}</_Wrapper>
);
