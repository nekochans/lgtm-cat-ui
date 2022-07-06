import React, { FC } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import styled from 'styled-components';

import { UploadTitleArea } from '../../components/UploadTitleArea';
import { Language } from '../../types/language';

const UploadFormWrapper = styled.form``;

const InputFileAreaWrapper = styled.div`
  box-sizing: border-box;
  width: 500px;
  height: 220px;
  margin-right: auto;
  margin-left: auto;
  background: #fff;
  border: 1px dashed #362e2b;
`;

const faCloudUploadAltStyle = {
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '42px',
  lineHeight: '39px',
  color: '#f0a14e',
};

const Text = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: #8e7e78;
`;

export type Props = {
  language: Language;
};

export const UploadTemplate: FC<Props> = ({ language }) => (
  <>
    <UploadTitleArea language={language} />
    <UploadFormWrapper>
      <InputFileAreaWrapper>
        <FaCloudUploadAlt style={faCloudUploadAltStyle} />
        <Text>ここに画像をドロップ</Text>
      </InputFileAreaWrapper>
    </UploadFormWrapper>
  </>
);
