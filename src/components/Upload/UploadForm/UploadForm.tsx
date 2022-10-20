/* eslint-disable max-lines */
import { useState, useCallback, type FC, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import { useDropzone } from 'react-dropzone';
import { FaCloudUploadAlt } from 'react-icons/fa';
import type { AppUrl } from '../../../constants';
import {
  isValidFileType,
  extractImageExtFromValidFileType,
  createPrivacyPolicyLinksFromLanguages,
} from '../../../features';
import { mixins } from '../../../styles/mixins';
import type {
  AcceptedTypesImageExtension,
  ImageUploader,
  ImageValidator,
  LgtmImageUrl,
  Language,
} from '../../../types';
import { assertNever } from '../../../utils';
import { UploadButton } from '../UploadButton';
import { UploadErrorMessageArea } from '../UploadErrorMessageArea';
import { UploadModal } from '../UploadModal';
import { UploadTitleArea } from '../UploadTitleArea';

import {
  _CautionTextArea,
  _DescriptionAreaWrapper,
  _Form,
  _InputFile,
  _InputFileArea,
  _InputFileLabel,
  _InputFileLabelText,
  _MaxUploadSizeText,
  _Notes,
  _PrivacyLinkText,
  _PrivacyPolicyArea,
  _Text,
  _UploadButtonWrapper,
  _Wrapper,
} from './StyledComponents';
import {
  cautionText,
  createNotAllowedImageExtensionErrorMessage,
  imageDropAreaText,
  noteList,
  unexpectedErrorMessage,
  uploadInputButtonText,
} from './i18n';

const faCloudUploadAltStyle = {
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '42px',
  lineHeight: '39px',
  color: `${mixins.colors.primaryVariant}`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: 'auto',
};

export const createPrivacyPolicyArea = (language: Language): JSX.Element => {
  const privacyLinkAttribute = createPrivacyPolicyLinksFromLanguages(language);

  switch (language) {
    case 'ja':
      return (
        <_PrivacyPolicyArea>
          アップロードするボタンを押下することで{' '}
          <Link href={privacyLinkAttribute.link} prefetch={false}>
            <_PrivacyLinkText>{privacyLinkAttribute.text}</_PrivacyLinkText>
          </Link>{' '}
          に同意したと見なします
        </_PrivacyPolicyArea>
      );
    case 'en':
      return (
        <_PrivacyPolicyArea>
          By pressing the upload button, you agree to the{' '}
          <Link href={privacyLinkAttribute.link} prefetch={false}>
            <_PrivacyLinkText>{privacyLinkAttribute.text}</_PrivacyLinkText>
          </Link>{' '}
          .
        </_PrivacyPolicyArea>
      );
    default:
      return assertNever(language);
  }
};

export type Props = {
  language: Language;
  imageValidator: ImageValidator;
  imageUploader: ImageUploader;
  uploadCallback?: () => void;
  onClickCreatedLgtmImage?: () => void;
  onClickMarkdownSourceCopyButton?: () => void;
  appUrl?: AppUrl;
};

// eslint-disable-next-line max-lines-per-function, max-statements
export const UploadForm: FC<Props> = ({
  language,
  imageValidator,
  imageUploader,
  uploadCallback,
  onClickCreatedLgtmImage,
  onClickMarkdownSourceCopyButton,
  appUrl,
}) => {
  const [base64Image, setBase64Image] = useState<string>('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>('');
  const [uploadImageExtension, setUploadImageExtension] = useState<
    AcceptedTypesImageExtension | string
  >('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [uploaded, setUploaded] = useState<boolean>();
  const [createdLgtmImageUrl, setCreatedLgtmImageUrl] = useState<
    LgtmImageUrl | string
  >('');
  const [displayErrorMessages, setDisplayErrorMessages] = useState<string[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setUploaded(false);
    setCreatedLgtmImageUrl('');
    setModalIsOpen(false);
  };

  // エラーが起きた時にStateを初期化する為に利用する
  const stateInitAtError = () => {
    setImagePreviewUrl('');
    setUploadImageExtension('');
    setIsLoading(false);
    closeModal();
  };

  const handleReaderLoaded = (event: ProgressEvent<FileReader>) => {
    if (event.target === null) {
      return;
    }

    const binaryString = event.target?.result;
    if (typeof binaryString !== 'string') {
      return;
    }

    setBase64Image(window.btoa(binaryString));
  };

  // eslint-disable-next-line max-statements
  const mightConvertImageToBase64 = (file: File) => {
    setUploaded(false);
    const fileType = file.type;
    if (!isValidFileType(fileType)) {
      setDisplayErrorMessages(
        createNotAllowedImageExtensionErrorMessage(fileType, language)
      );
      stateInitAtError();

      return;
    }

    const url = URL.createObjectURL(file);

    setImagePreviewUrl(url);
    setUploadImageExtension(extractImageExtFromValidFileType(fileType));

    const reader = new FileReader();
    reader.onload = handleReaderLoaded;
    reader.readAsBinaryString(file);

    openModal();
  };

  // eslint-disable-next-line max-statements
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-magic-numbers
    if (event.target.files && event.target.files.length > 0) {
      const targetIndex = 0;
      const file = event.target.files[targetIndex];
      mightConvertImageToBase64(file);
    }
  };

  const shouldDisableButton = (): boolean => {
    // eslint-disable-next-line no-magic-numbers
    if (displayErrorMessages.length !== 0) {
      return true;
    }

    return imagePreviewUrl === '';
  };

  const onClickUploadButton = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    openModal();
  };

  // eslint-disable-next-line max-statements, max-lines-per-function
  const executeUpload = async () => {
    setIsLoading(true);

    try {
      const imageValidationResult = await imageValidator(
        base64Image,
        uploadImageExtension as AcceptedTypesImageExtension
      );

      if (
        !imageValidationResult.value.isAcceptableCatImage ||
        // eslint-disable-next-line no-magic-numbers
        imageValidationResult.value.notAcceptableReason.length !== 0
      ) {
        setDisplayErrorMessages(
          imageValidationResult.value.notAcceptableReason
        );
        stateInitAtError();

        return;
      }

      const imageUploadResult = await imageUploader(
        base64Image,
        uploadImageExtension as AcceptedTypesImageExtension
      );

      setIsLoading(false);
      // setCreatedLgtmImageUrlで空文字を指定しているのでtruthyな値での判定を許可する
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (imageUploadResult.value.createdLgtmImageUrl) {
        setUploaded(true);
        setDisplayErrorMessages([]);
        setCreatedLgtmImageUrl(imageUploadResult.value.createdLgtmImageUrl);

        if (uploadCallback) {
          uploadCallback();
        }
      }

      // eslint-disable-next-line no-magic-numbers
      if (imageUploadResult.value.displayErrorMessages.length !== 0) {
        setDisplayErrorMessages(imageUploadResult.value.displayErrorMessages);
        stateInitAtError();
      }
    } catch (error) {
      setDisplayErrorMessages(unexpectedErrorMessage(language));
      stateInitAtError();

      if (error instanceof Error) {
        throw error;
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onClickClose = () => {
    closeModal();
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // eslint-disable-next-line no-magic-numbers
    if (acceptedFiles.length > 0) {
      const targetIndex = 0;
      const file = acceptedFiles[targetIndex];

      mightConvertImageToBase64(file);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps } = useDropzone({ onDrop });

  return (
    <_Wrapper>
      {/* eslint-disable no-magic-numbers */}
      {displayErrorMessages.length === 0 ? (
        ''
      ) : (
        <UploadErrorMessageArea messages={displayErrorMessages} />
      )}
      <UploadTitleArea language={language} />
      <_Form>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <div {...getRootProps()}>
          <_InputFileArea>
            <FaCloudUploadAlt style={faCloudUploadAltStyle} />
            <_Text>{imageDropAreaText(language)}</_Text>
            <_InputFileLabel>
              <_InputFileLabelText>
                {uploadInputButtonText(language)}
              </_InputFileLabelText>
              <_InputFile type="file" onChange={handleFileUpload} />
            </_InputFileLabel>
          </_InputFileArea>
        </div>
        <_MaxUploadSizeText>Maximum upload size is 4MB</_MaxUploadSizeText>
        <_DescriptionAreaWrapper>
          <_CautionTextArea>{cautionText(language)}</_CautionTextArea>
          <_Notes>
            {noteList(language).map((note, index) => (
              <p key={index}>{note}</p>
            ))}
          </_Notes>
          {createPrivacyPolicyArea(language)}
        </_DescriptionAreaWrapper>
        <_UploadButtonWrapper>
          <UploadButton
            language={language}
            disabled={shouldDisableButton()}
            onClick={onClickUploadButton}
          />
        </_UploadButtonWrapper>
      </_Form>
      {imagePreviewUrl || createdLgtmImageUrl ? (
        <UploadModal
          isOpen={modalIsOpen}
          language={language}
          imagePreviewUrl={imagePreviewUrl}
          onClickUpload={executeUpload}
          onClickCancel={closeModal}
          onClickClose={onClickClose}
          isLoading={isLoading}
          uploaded={uploaded}
          createdLgtmImageUrl={createdLgtmImageUrl}
          onClickCreatedLgtmImage={onClickCreatedLgtmImage}
          onClickMarkdownSourceCopyButton={onClickMarkdownSourceCopyButton}
          appUrl={appUrl}
        />
      ) : (
        ''
      )}
    </_Wrapper>
  );
};
