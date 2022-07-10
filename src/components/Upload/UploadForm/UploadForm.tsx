import Link from 'next/link';
import React, { FC } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import styled from 'styled-components';

import { Language } from '../../../types/language';
import { UploadButton } from '../UploadButton';
import { UploadTitleArea } from '../UploadTitleArea';

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

const Button = styled.button`
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
  background: #faf9f7;
  border: 1px solid #8e7e78;
  border-radius: 4px;
`;

const ButtonText = styled.div`
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

const CautionText = styled.div`
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

export type Props = {
  language: Language;
};

export const UploadForm: FC<Props> = ({ language }) => (
  <Wrapper>
    <Form>
      <UploadTitleArea language={language} />
      <InputFileArea>
        <FaCloudUploadAlt style={faCloudUploadAltStyle} />
        <Text>ここに画像をドロップ</Text>
        <Button>
          <ButtonText>またはファイルの選択</ButtonText>
        </Button>
      </InputFileArea>
      <CautionText>注意事項</CautionText>
      <Notes>
        <p>拡張子が png, jpg, jpeg の画像のみアップロード出来ます。</p>
        <p>猫が写っていない画像はアップロード出来ません。</p>
        <p>人の顔がはっきり写っている画像はアップロード出来ません。</p>
        <p>猫のイラスト等は正確に判定出来ない事があります。</p>
      </Notes>
      <PrivacyPolicyArea>
        アップロードするボタンを押下することで{' '}
        <Link href="/privacy" prefetch={false}>
          <PrivacyLinkText>プライバシーポリシー</PrivacyLinkText>
        </Link>{' '}
        に同意したと見なします
      </PrivacyPolicyArea>
      <UploadButtonWrapper>
        <UploadButton />
      </UploadButtonWrapper>
    </Form>
  </Wrapper>
);
