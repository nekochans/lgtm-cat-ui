import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const CancelButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;
  background: #faf9f7;
  border: 1px solid #8e7e78;
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
  &:hover {
    opacity: 0.8;
  }
`;

const CancelButtonText = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #f0a14e;
  flex: none;
  order: 0;
  flex-grow: 0;
  &:hover {
    opacity: 0.8;
  }
`;

const UploadButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 20px;
  gap: 10px;
  background: #eb7c06;
  border-radius: 4px;
  flex: none;
  order: 1;
  flex-grow: 0;
  &:hover {
    opacity: 0.8;
  }
`;

const UploadButtonText = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  &:hover {
    opacity: 0.8;
  }
`;

type Props = {
  onClickUpload: () => Promise<void>;
  onClickCancel: () => void;
};

export const ButtonGroup: React.FC<Props> = ({
  onClickUpload,
  onClickCancel,
}) => (
  <Wrapper>
    <CancelButton onClick={onClickCancel}>
      <CancelButtonText>キャンセル</CancelButtonText>
    </CancelButton>
    <UploadButton onClick={onClickUpload}>
      <UploadButtonText>アップロード</UploadButtonText>
    </UploadButton>
  </Wrapper>
);
