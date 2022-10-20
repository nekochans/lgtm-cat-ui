import type { FC } from 'react';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import { mixins } from '../../styles';
import type { Language } from '../../types';

const textWrapperStyle = css`
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 10px;
  align-items: flex-start;
  width: 125px;
  height: 39px;
  padding: 10px 0;
  background: rgba(54, 46, 43, 0.4);
`;

const _Wrapper = styled.nav`
  @media (max-width: 767px) {
    right: 0;
  }
  position: absolute;
  right: 20px;
  bottom: -70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const _EnTextWrapper = styled.span`
  ${textWrapperStyle};
  order: 0;
`;

const _EnText = styled.a`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 125px;
  height: 19px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  color: ${mixins.colors.background};
  text-align: center;
  cursor: pointer;
`;

const _Separator = styled.span`
  flex: none;
  flex-grow: 0;
  order: 1;
  width: 125px;
  height: 0;
  border: 1px solid rgba(54, 46, 43, 0.5);
`;

const _JaTextWrapper = styled.span`
  ${textWrapperStyle};
  order: 2;
`;

const _JaText = styled.a`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 125px;
  height: 19px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  color: ${mixins.colors.background};
  text-align: center;
  cursor: pointer;
`;

export type Props = {
  language: Language;
  currentUrlPath: string;
};

export const LanguageMenu: FC<Props> = ({ language, currentUrlPath }) => (
  <_Wrapper>
    <_EnTextWrapper>
      <Link href={currentUrlPath} locale="en" prefetch={false}>
        <_EnText data-gtm-click="language-menu-en-link">
          {language === 'en' ? <FaAngleRight /> : ''}
          English
        </_EnText>
      </Link>
      <_EnText>
        {language === 'en' ? <FaAngleRight /> : ''}
        English
      </_EnText>
    </_EnTextWrapper>
    <_Separator />
    <_JaTextWrapper>
      <Link href={currentUrlPath} locale="ja" prefetch={false}>
        <_JaText data-gtm-click="language-menu-ja-link">
          {language === 'ja' ? <FaAngleRight /> : ''}
          日本語
        </_JaText>
      </Link>
    </_JaTextWrapper>
  </_Wrapper>
);
