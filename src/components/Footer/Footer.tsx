import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UpperSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 365px 20px;
  background: #fffcf6;
`;

const TermsLinkText = styled.a`
  flex: none;
  flex-grow: 0;
  order: 0;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #43281e;
  text-align: center;
  text-decoration-line: underline;
`;

const PrivacyLinkText = styled.a`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #43281e;
  text-align: center;
  text-decoration-line: underline;
`;

const SeparatorText = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #43281e;
  text-align: center;
`;

const LowerSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px 644px;
  background: #f2ebdf;
`;

const LowerSectionText = styled.div`
  width: 152px;
  height: 28px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #43281e;
`;

type Props = {
  terms: {
    text: string;
    link: `https://${string}` | `/${string}`;
  };
  privacy: {
    text: string;
    link: `https://${string}` | `/${string}`;
  };
};

export const Footer: React.FC<Props> = ({ terms, privacy }) => (
  <StyledFooter>
    <UpperSection>
      <TermsLinkText href={terms.link}>{terms.text}</TermsLinkText>
      {/* eslint-disable no-irregular-whitespace */}
      <SeparatorText>　/　</SeparatorText>
      <PrivacyLinkText href={privacy.link}>{privacy.text}</PrivacyLinkText>
    </UpperSection>
    <LowerSection>
      <LowerSectionText>Copyright (c) nekochans</LowerSectionText>
    </LowerSection>
  </StyledFooter>
);
