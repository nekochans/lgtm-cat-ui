import type { FC, CSSProperties } from 'react';
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
  background: ${mixins.colors.subVariant};
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

const termsLinkTextStyle: CSSProperties = {
  flex: 'none',
  flexGrow: '0',
  order: '0',
  height: '28px',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '28px',
  color: '#43281e',
  textAlign: 'center',
  textDecorationLine: 'underline',
  cursor: 'pointer',
};

const privacyLinkTextStyle: CSSProperties = {
  flex: 'none',
  flexGrow: '0',
  order: '2',
  height: '28px',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '28px',
  color: '#43281e',
  textAlign: 'center',
  textDecorationLine: 'underline',
  cursor: 'pointer',
};

export type Props = {
  language: Language;
};

export const Footer: FC<Props> = ({ language }) => {
  const terms = createTermsOfUseLinksFromLanguages(language);

  const privacy = createPrivacyPolicyLinksFromLanguages(language);

  return (
    <_Wrapper>
      <_UpperSection>
        <Link href={terms.link} prefetch={false} style={termsLinkTextStyle}>
          <p data-gtm-click="footer-terms-link">{terms.text}</p>
        </Link>
        {/* eslint-disable no-irregular-whitespace */}
        <_SeparatorText> / </_SeparatorText>
        <Link href={privacy.link} prefetch={false} style={privacyLinkTextStyle}>
          <p data-gtm-click="footer-privacy-link">{privacy.text}</p>
        </Link>
      </_UpperSection>
      <_LowerSection>
        <_LowerSectionText>Copyright (c) nekochans</_LowerSectionText>
      </_LowerSection>
    </_Wrapper>
  );
};
