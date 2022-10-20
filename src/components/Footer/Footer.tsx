import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
  createPrivacyPolicyLinksFromLanguages,
  createTermsOfUseLinksFromLanguages,
} from '../../features';
import { mixins } from '../../styles';

import type { Language } from '../../types';

const _Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const _UpperSection = styled.div`
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

const _TermsLinkText = styled.a`
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

const _PrivacyLinkText = styled.a`
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

const _SeparatorText = styled.div`
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

const _LowerSection = styled.div`
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
  background: ${mixins.colors.sub};
`;

const _LowerSectionText = styled.div`
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

export type Props = {
  language: Language;
};

export const Footer: FC<Props> = ({ language }) => {
  const terms = createTermsOfUseLinksFromLanguages(language);

  const privacy = createPrivacyPolicyLinksFromLanguages(language);

  return (
    <_Wrapper>
      <_UpperSection>
        <Link href={terms.link} prefetch={false}>
          <_TermsLinkText data-gtm-click="footer-terms-link">
            {terms.text}
          </_TermsLinkText>
        </Link>
        {/* eslint-disable no-irregular-whitespace */}
        <_SeparatorText> / </_SeparatorText>
        <Link href={privacy.link} prefetch={false}>
          <_PrivacyLinkText data-gtm-click="footer-privacy-link">
            {privacy.text}
          </_PrivacyLinkText>
        </Link>
      </_UpperSection>
      <_LowerSection>
        <_LowerSectionText>Copyright (c) nekochans</_LowerSectionText>
      </_LowerSection>
    </_Wrapper>
  );
};
