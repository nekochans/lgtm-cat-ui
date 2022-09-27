import type { FC } from 'react';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';
import styled, { css } from 'styled-components';
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

const StyledLanguageMenu = styled.nav`
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

const EnTextWrapper = styled.span`
  ${textWrapperStyle};
  order: 0;
`;

const EnText = styled.a`
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
  color: #faf9f7;
  text-align: center;
  cursor: pointer;
`;

const Separator = styled.span`
  flex: none;
  flex-grow: 0;
  order: 1;
  width: 125px;
  height: 0;
  border: 1px solid rgba(54, 46, 43, 0.5);
`;

const JaTextWrapper = styled.span`
  ${textWrapperStyle};
  order: 2;
`;

const JaText = styled.a`
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
  color: #faf9f7;
  text-align: center;
  cursor: pointer;
`;

export type Props = {
  language: Language;
  currentUrlPath: string;
};

export const LanguageMenu: FC<Props> = ({ language, currentUrlPath }) => (
  <StyledLanguageMenu>
    <EnTextWrapper>
      <Link href={currentUrlPath} locale="en" prefetch={false}>
        <EnText data-gtm-click="language-menu-en-link">
          {language === 'en' ? <FaAngleRight /> : ''}
          English
        </EnText>
      </Link>
      <EnText>
        {language === 'en' ? <FaAngleRight /> : ''}
        English
      </EnText>
    </EnTextWrapper>
    <Separator />
    <JaTextWrapper>
      <Link href={currentUrlPath} locale="ja" prefetch={false}>
        <JaText data-gtm-click="language-menu-ja-link">
          {language === 'ja' ? <FaAngleRight /> : ''}
          日本語
        </JaText>
      </Link>
    </JaTextWrapper>
  </StyledLanguageMenu>
);
