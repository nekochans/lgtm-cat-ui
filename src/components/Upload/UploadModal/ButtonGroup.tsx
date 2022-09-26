import type { FC } from 'react';
import styled from 'styled-components';

import type { Language } from '../../../types';
import { assertNever } from '../../../utils';

const Wrapper = styled.div`
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 20px;
  align-items: center;
  justify-content: center;
  order: 1;
  padding: 0;
`;

const CancelButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 10px;
  align-items: center;
  justify-content: center;
  order: 0;
  padding: 12px 20px;
  background: #faf9f7;
  border: 1px solid #8e7e78;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
`;

const CancelButtonText = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  color: #f0a14e;
  &:hover {
    opacity: 0.8;
  }
`;

const UploadButton = styled.button`
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 10px;
  align-items: center;
  justify-content: center;
  order: 1;
  padding: 7px 20px;
  background: #eb7c06;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
`;

const UploadButtonText = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: #fff;
  &:hover {
    opacity: 0.8;
  }
`;

const cancelButtonText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return 'キャンセル';
    case 'en':
      return 'cancel';
    default:
      return assertNever(language);
  }
};

const uploadButtonText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return 'アップロード';
    case 'en':
      return 'upload';
    default:
      return assertNever(language);
  }
};

type Props = {
  language: Language;
  onClickUpload: () => Promise<void>;
  onClickCancel: () => void;
};

export const ButtonGroup: FC<Props> = ({
  language,
  onClickUpload,
  onClickCancel,
}) => (
  <Wrapper>
    <CancelButton onClick={onClickCancel}>
      <CancelButtonText>{cancelButtonText(language)}</CancelButtonText>
    </CancelButton>
    <UploadButton onClick={onClickUpload}>
      <UploadButtonText>{uploadButtonText(language)}</UploadButtonText>
    </UploadButton>
  </Wrapper>
);
