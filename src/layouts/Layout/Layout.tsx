import React from 'react';
import styled from 'styled-components';

import { Footer, Props as FooterProps } from '../../components/Footer';
import { Header, Props as HeaderProps } from '../../components/Header';

const Wrapper = styled.div`
  position: relative;
`;

const ContentsWrapper = styled.div`
  display: block;
  margin: 16px auto;
  text-align: center;
`;

export type Props = FooterProps & HeaderProps & { children: React.ReactNode };

export const Layout: React.FC<Props> = ({
  terms,
  privacy,
  language,
  isLanguageMenuDisplayed,
  onClickLanguageButton,
  onClickEn,
  onClickJa,
  children,
}) => (
  <Wrapper>
    <Header
      language={language}
      isLanguageMenuDisplayed={isLanguageMenuDisplayed}
      onClickLanguageButton={onClickLanguageButton}
      onClickEn={onClickEn}
      onClickJa={onClickJa}
    />
    <ContentsWrapper>{children}</ContentsWrapper>
    <Footer terms={terms} privacy={privacy} />
  </Wrapper>
);
