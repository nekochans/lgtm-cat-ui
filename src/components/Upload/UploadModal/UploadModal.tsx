import React, { FC } from 'react';
import styled from 'styled-components';

import { Language } from '../../../types/language';

export type Props = {
  language: Language;
  previewImage: string;
};

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 27px 30px 45px;
  gap: 10px;
  position: absolute;
  width: 500px;
  background: #faf9f7;
  border: 1px dashed #8e7e78;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 14px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Title = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #8e7e78;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 16px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const PreviewImageWrapper = styled.div`
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const PreviewImage = styled.img`
  width: auto;
  height: 270px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ConfirmMessage = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #8e7e78;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ButtonGroup = styled.div`
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

export const UploadModal: FC<Props> = ({ language, previewImage }) => (
  <Wrapper>
    <ContentsWrapper>
      <Title>猫ちゃん画像アップロード確認</Title>
      <FormWrapper>
        <PreviewImageWrapper>
          <PreviewImage src={previewImage} />
        </PreviewImageWrapper>
        <ConfirmMessage>
          この画像をアップロードします。よろしいですか？
        </ConfirmMessage>
      </FormWrapper>
      <ButtonGroup>
        <CancelButton>
          <CancelButtonText>キャンセル</CancelButtonText>
        </CancelButton>
        <UploadButton>
          <UploadButtonText>アップロード</UploadButtonText>
        </UploadButton>
      </ButtonGroup>
    </ContentsWrapper>
  </Wrapper>
);
