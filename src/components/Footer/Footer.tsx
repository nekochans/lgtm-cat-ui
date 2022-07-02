import Link from 'next/link';
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
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  align-items: center;
  justify-content: center;
  order: 0;
  width: 100%;
  padding: 10px 0 20px;
  background: #fffcf6;
`;

const TermsLinkText = styled.a`
  flex: none;
  flex-grow: 0;
  order: 0;
  height: 28px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #43281e;
  text-align: center;
  text-decoration-line: underline;
  cursor: pointer;
`;

const PrivacyLinkText = styled.a`
  flex: none;
  flex-grow: 0;
  order: 2;
  height: 28px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #43281e;
  text-align: center;
  text-decoration-line: underline;
  cursor: pointer;
`;

const SeparatorText = styled.div`
  flex: none;
  flex-grow: 0;
  order: 1;
  width: 34px;
  height: 28px;
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
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 10px;
  align-items: center;
  justify-content: center;
  order: 1;
  width: 100%;
  padding: 20px 0;
  background: #f2ebdf;
`;

const LowerSectionText = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 152px;
  height: 28px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #43281e;
`;

type LinkAttribute = {
  text: string;
  link: `https://${string}` | `/${string}`;
};

export type Props = {
  terms: LinkAttribute;
  privacy: LinkAttribute;
};

export const Footer: React.FC<Props> = ({ terms, privacy }) => (
  <StyledFooter>
    <UpperSection>
      <Link href={terms.link} prefetch={false}>
        <TermsLinkText>{terms.text}</TermsLinkText>
      </Link>
      {/* eslint-disable no-irregular-whitespace */}
      <SeparatorText> / </SeparatorText>
      <Link href={privacy.link} prefetch={false}>
        <PrivacyLinkText>{privacy.text}</PrivacyLinkText>
      </Link>
    </UpperSection>
    <LowerSection>
      <LowerSectionText>Copyright (c) nekochans</LowerSectionText>
    </LowerSection>
  </StyledFooter>
);
