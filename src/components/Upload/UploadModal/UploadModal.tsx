import React, { FC } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { Language } from '../../../types/language';
import { LgtmImageUrl } from '../../../types/lgtmImage';
import { UploadProgressBar } from '../UploadProgressBar';

import { ButtonGroup } from './ButtonGroup';
import { CreatedLgtmImage } from './CreatedLgtmImage';
import { SuccessMessageArea } from './SuccessMessageArea';

export type Props = {
  isOpen: boolean;
  language: Language;
  imagePreviewUrl: string;
  onClickUpload: () => Promise<void>;
  onClickCancel: () => void;
  onClickClose: () => void;
  isLoading: boolean;
  uploaded?: boolean;
  createdLgtmImageUrl: LgtmImageUrl | string;
};

const Wrapper = styled.div`
  @media (max-width: 767px) {
    width: 360px;
  }
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
  @media (max-width: 767px) {
    max-width: 355px;
  }
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

const modalStyle = {
  overlay: {
    background: 'rgba(54, 46, 43, 0.7)',
  },
  content: {
    '@media (maxWidth: 767px)': {
      width: '370px',
    },
    width: '540px',
    height: '540px',
    inset: '0',
    margin: 'auto',
  },
};

export const UploadModal: FC<Props> = ({
  isOpen,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  language,
  imagePreviewUrl,
  onClickUpload,
  onClickCancel,
  onClickClose,
  isLoading,
  uploaded = false,
  createdLgtmImageUrl,
}) => {
  if (uploaded) {
    modalStyle.content.height = '705px';
  } else {
    modalStyle.content.height = '540px';
  }

  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      style={modalStyle}
      onRequestClose={onClickCancel}
    >
      <Wrapper>
        <ContentsWrapper>
          <Title>猫ちゃん画像アップロード確認</Title>
          <FormWrapper>
            {uploaded ? (
              // TODO 後でちゃんとパラメータを渡せるようにする
              <CreatedLgtmImage
                imagePreviewUrl={imagePreviewUrl}
                createdLgtmImageUrl={createdLgtmImageUrl}
              />
            ) : (
              <PreviewImageWrapper>
                <PreviewImage src={imagePreviewUrl} />
              </PreviewImageWrapper>
            )}
            {!isLoading && !uploaded ? (
              <>
                <ConfirmMessage>
                  この画像をアップロードします。よろしいですか？
                </ConfirmMessage>
              </>
            ) : (
              ''
            )}
          </FormWrapper>
          {uploaded && createdLgtmImageUrl && !isLoading ? (
            <SuccessMessageArea
              createdLgtmImageUrl={createdLgtmImageUrl}
              onClickClose={onClickClose}
            />
          ) : (
            ''
          )}
          {!uploaded && !createdLgtmImageUrl && !isLoading ? (
            <ButtonGroup
              onClickUpload={onClickUpload}
              onClickCancel={onClickCancel}
            />
          ) : (
            ''
          )}
          {isLoading ? <UploadProgressBar /> : ''}
        </ContentsWrapper>
      </Wrapper>
    </Modal>
  );
};
