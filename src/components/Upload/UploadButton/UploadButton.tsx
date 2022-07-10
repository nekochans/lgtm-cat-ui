import React from 'react';
import styled from 'styled-components';

import { Language } from '../../../types/language';
import assertNever from '../../../utils/assertNever';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  background: #eb7c06;
  border-radius: 4px;
`;

const Text = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 128px;
  height: 18px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: #fff;
`;

const createText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return 'アップロードする';
    case 'en':
      return 'Upload';
    default:
      return assertNever(language);
  }
};

type Props = {
  language: Language;
};

export const UploadButton: React.FC<Props> = ({ language }) => (
  <Button type="submit">
    <Text>{createText(language)}</Text>
  </Button>
);
