import Link from 'next/link';
import React, { FC } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import styled from 'styled-components';

import { createLinksFromLanguages } from '../../../features/privacyPolicy';
import assertNever from '../../../utils/assertNever';
import { UploadButton } from '../UploadButton';
import { UploadErrorMessageArea } from '../UploadErrorMessageArea';
import { UploadTitleArea } from '../UploadTitleArea';

import type { Language } from '../../../types/language';

const Wrapper = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  flex-grow: 0;
  gap: 61px;
  align-items: center;
  order: 0;
  padding: 0;
`;

const Form = styled.form`
  flex: none;
  flex-grow: 0;
  order: 1;
`;

const InputFileArea = styled.div`
  box-sizing: border-box;
  display: grid;
  height: 220px;
  background: #fff;
  border: 1px dashed #362e2b;
`;

const faCloudUploadAltStyle = {
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '42px',
  lineHeight: '39px',
  color: '#f0a14e',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: 'auto',
};

const Text = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: #8e7e78;
  text-align: center;
`;

const InputFile = styled.input`
  display: none;
`;

const InputFileLabel = styled.label`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 43px;
  padding: 12px 20px;
  margin: auto;
  cursor: pointer;
  background: #faf9f7;
  border: 1px solid #8e7e78;
  border-radius: 4px;
`;

const InputFileLabelText = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 160px;
  height: 19px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  color: #f0a14e;
`;

const MaxUploadSizeText = styled.div`
  height: 28px;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #8e7e78;
  text-align: right;
`;

const CautionTextArea = styled.div`
  height: 28px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #362e2b;
  text-align: center;
`;

const Notes = styled.div`
  top: 609px;
  height: 96px;
  font-family: Roboto, sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #362e2b;
`;

const DescriptionAreaWrapper = styled.div`
  display: grid;
  gap: 24px;
`;

const PrivacyPolicyArea = styled.div`
  height: 42px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #362e2b;
  text-align: center;
`;

const PrivacyLinkText = styled.a`
  height: 42px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #eb7c06;
  text-align: center;
  text-decoration-line: underline;
  cursor: pointer;
`;

const UploadButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const imageDropAreaText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return 'ここに画像をドロップ';
    case 'en':
      return 'Drop image here';
    default:
      return assertNever(language);
  }
};

const uploadInputButtonText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return 'またはファイルの選択';
    case 'en':
      return 'Select an image file';
    default:
      return assertNever(language);
  }
};

const cautionText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return '注意事項';
    case 'en':
      return 'precautions';
    default:
      return assertNever(language);
  }
};

const noteList = (language: Language): string[] => {
  switch (language) {
    case 'ja':
      return [
        '拡張子が png, jpg, jpeg の画像のみアップロード出来ます。',
        '猫が写っていない画像はアップロード出来ません。',
        '人の顔がはっきり写っている画像はアップロード出来ません。',
        '猫のイラスト等は正確に判定出来ない事があります。',
      ];
    case 'en':
      return [
        'png, jpg, jpeg, images are available.',
        'Images without cats cannot be uploaded.',
        "Images that clearly show a person's face cannot be uploaded.",
        'Illustrations of cats may not be accurately determined.',
      ];
    default:
      return assertNever(language);
  }
};

const createPrivacyPolicyArea = (language: Language): JSX.Element => {
  const privacyLinkAttribute = createLinksFromLanguages(language);

  switch (language) {
    case 'ja':
      return (
        <PrivacyPolicyArea>
          アップロードするボタンを押下することで{' '}
          <Link href={privacyLinkAttribute.link} prefetch={false}>
            <PrivacyLinkText>{privacyLinkAttribute.text}</PrivacyLinkText>
          </Link>{' '}
          に同意したと見なします
        </PrivacyPolicyArea>
      );
    case 'en':
      return (
        <PrivacyPolicyArea>
          By pressing the upload button, you agree to the{' '}
          <Link href={privacyLinkAttribute.link} prefetch={false}>
            <PrivacyLinkText>{privacyLinkAttribute.text}</PrivacyLinkText>
          </Link>{' '}
          .
        </PrivacyPolicyArea>
      );
    default:
      return assertNever(language);
  }
};

export type Props = {
  language: Language;
  errorMessages?: string[];
};

export const UploadForm: FC<Props> = ({ language, errorMessages }) => (
  <Wrapper>
    {errorMessages ? <UploadErrorMessageArea messages={errorMessages} /> : ''}
    <UploadTitleArea language={language} />
    <Form>
      <InputFileArea>
        <FaCloudUploadAlt style={faCloudUploadAltStyle} />
        <Text>{imageDropAreaText(language)}</Text>
        <InputFileLabel>
          <InputFileLabelText>
            {uploadInputButtonText(language)}
          </InputFileLabelText>
          <InputFile type="file" />
        </InputFileLabel>
      </InputFileArea>
      <MaxUploadSizeText>Maximum upload size is 4MB</MaxUploadSizeText>
      <DescriptionAreaWrapper>
        <CautionTextArea>{cautionText(language)}</CautionTextArea>
        <Notes>
          {noteList(language).map((note, index) => (
            <p key={index}>{note}</p>
          ))}
        </Notes>
        {createPrivacyPolicyArea(language)}
      </DescriptionAreaWrapper>
      <UploadButtonWrapper>
        <UploadButton language={language} />
      </UploadButtonWrapper>
    </Form>
  </Wrapper>
);
