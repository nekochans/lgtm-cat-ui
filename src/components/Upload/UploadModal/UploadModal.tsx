import type { FC } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import type { AppUrl } from '../../../constants';
import { mixins } from '../../../styles';
import type { Language, LgtmImageUrl } from '../../../types';
import { assertNever } from '../../../utils';
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
  createdLgtmImageUrl: LgtmImageUrl | string;
  uploaded?: boolean;
  onClickCreatedLgtmImage?: () => void;
  onClickMarkdownSourceCopyButton?: () => void;
  appUrl?: AppUrl;
};

const _Wrapper = styled.div`
  @media (max-width: ${mixins.mediaQuerySize.default}) {
    width: 360px;
  }
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 500px;
  padding: 27px 30px 45px;
  background: ${mixins.colors.background};
  border: 1px dashed ${mixins.colors.subText};
`;

const _ContentsWrapper = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  flex-grow: 0;
  gap: 14px;
  align-items: center;
  order: 0;
  padding: 0;
`;

const _Title = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: ${mixins.colors.subText};
  text-align: center;
`;

const _FormWrapper = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  flex-grow: 0;
  gap: 16px;
  align-items: center;
  order: 1;
  padding: 0;
`;

const _PreviewImageWrapper = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
`;

const _PreviewImage = styled.img`
  @media (max-width: ${mixins.mediaQuerySize.default}) {
    max-width: 355px;
  }
  flex: none;
  flex-grow: 0;
  order: 0;
  width: auto;
  height: 270px;
`;

const _ConfirmMessage = styled.div`
  flex: none;
  flex-grow: 0;
  order: 1;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  color: ${mixins.colors.subText};
`;

const titleText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return '猫ちゃん画像アップロード確認';
    case 'en':
      return 'Cat image upload confirmed';
    default:
      return assertNever(language);
  }
};

const confirmMessageText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return 'この画像をアップロードします。よろしいですか？';
    case 'en':
      return 'Upload this image. Are you sure?';
    default:
      return assertNever(language);
  }
};

const mediaQuery = `@media (maxWidth: ${mixins.mediaQuerySize.default})`;

const modalStyle = {
  // stylelint-disable-next-line
  overlay: {
    background: 'rgba(54, 46, 43, 0.7)',
  },
  content: {
    // stylelint-disable-next-line selector-type-case, selector-type-no-unknown
    [mediaQuery]: {
      width: '370px',
    },
    inset: '0',
    width: '540px',
    height: '540px',
    margin: 'auto',
  },
};

// eslint-disable-next-line max-lines-per-function
export const UploadModal: FC<Props> = ({
  isOpen,
  language,
  imagePreviewUrl,
  onClickUpload,
  onClickCancel,
  onClickClose,
  isLoading,
  uploaded = false,
  createdLgtmImageUrl,
  onClickCreatedLgtmImage,
  onClickMarkdownSourceCopyButton,
  appUrl,
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
      <_Wrapper>
        <_ContentsWrapper>
          <_Title>{titleText(language)}</_Title>
          <_FormWrapper>
            {uploaded ? (
              <CreatedLgtmImage
                imagePreviewUrl={imagePreviewUrl}
                createdLgtmImageUrl={createdLgtmImageUrl}
                callback={onClickCreatedLgtmImage}
                appUrl={appUrl}
              />
            ) : (
              <_PreviewImageWrapper>
                <_PreviewImage src={imagePreviewUrl} />
              </_PreviewImageWrapper>
            )}
            {!isLoading && !uploaded ? (
              <>
                <_ConfirmMessage>
                  {confirmMessageText(language)}
                </_ConfirmMessage>
              </>
            ) : (
              ''
            )}
          </_FormWrapper>
          {uploaded && createdLgtmImageUrl && !isLoading ? (
            <SuccessMessageArea
              language={language}
              createdLgtmImageUrl={createdLgtmImageUrl}
              onClickClose={onClickClose}
              callback={onClickMarkdownSourceCopyButton}
              appUrl={appUrl}
            />
          ) : (
            ''
          )}
          {!uploaded && !createdLgtmImageUrl && !isLoading ? (
            <ButtonGroup
              language={language}
              onClickUpload={onClickUpload}
              onClickCancel={onClickCancel}
            />
          ) : (
            ''
          )}
          {isLoading ? <UploadProgressBar language={language} /> : ''}
        </_ContentsWrapper>
      </_Wrapper>
    </Modal>
  );
};
