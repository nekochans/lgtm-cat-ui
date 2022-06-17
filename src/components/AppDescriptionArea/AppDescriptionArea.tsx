import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const JaText = styled.div`
  font-family: Zen Kaku Gothic New, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #43281e;
  text-align: center;
`;

export const AppDescriptionArea: React.FC = () => (
  <Wrapper>
    <JaText>猫のLGTM画像を共有出来るサービスです。</JaText>
    <JaText>画像をクリックするとGitHub Markdownがコピーされます。</JaText>
  </Wrapper>
);
