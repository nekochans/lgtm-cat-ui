import React, { FC } from 'react';
import styled from 'styled-components';

const UploadTitleArea = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: #362e2b;
`;

export const UploadTemplate: FC = () => (
    <UploadTitleArea>
      猫ちゃん画像をアップロードしてLGTM画像を作れます🐱
    </UploadTitleArea>
  );
