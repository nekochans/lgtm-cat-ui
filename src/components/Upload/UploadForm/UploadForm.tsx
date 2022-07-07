import React, { FC } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import styled from 'styled-components';

import { Language } from '../../../types/language';
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
    </Form>
  </Wrapper>
);
