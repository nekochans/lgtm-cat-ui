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

const StyledLanguageMenu = styled.ul`
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

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const EnTextWrapper = styled.li`
  ${textWrapperStyle};
  order: 0;
`;

const EnText = styled.div`
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

const Separator = styled.li`
  flex: none;
  flex-grow: 0;
  order: 1;
  width: 125px;
  height: 0;
  border: 1px solid rgba(54, 46, 43, 0.5);
`;

const JaTextWrapper = styled.li`
  ${textWrapperStyle};
  order: 2;
`;

const JaText = styled.div`
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
  <StyledLanguageMenu role="menu">
    <Link href={currentUrlPath} locale="en" prefetch={false}>
      <StyledLink role="presentation" data-gtm-click="language-menu-en-link">
        <EnTextWrapper role="menuitem">
          <EnText>
            {language === 'en' ? <FaAngleRight /> : ''}
            English
          </EnText>
        </EnTextWrapper>
      </StyledLink>
    </Link>
    <Separator role="presentation" />
    <Link href={currentUrlPath} locale="ja" prefetch={false}>
      <StyledLink role="presentation" data-gtm-click="language-menu-ja-link">
        <JaTextWrapper role="menuitem">
          <JaText>
            {language === 'ja' ? <FaAngleRight /> : ''}
            日本語
          </JaText>
        </JaTextWrapper>
      </StyledLink>
    </Link>
  </StyledLanguageMenu>
);
