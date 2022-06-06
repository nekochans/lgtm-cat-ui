import React from 'react';
import styled from 'styled-components';

import { Footer, Props as FooterProps } from '../Footer';
import { Header, Props as HeaderProps } from '../Header';

const Wrapper = styled.div`
  position: relative;
`;

export type Props = FooterProps &
  HeaderProps & {
    isLanguageMenuDisplayed: boolean;
    onClickLanguageButton: (event: React.MouseEvent<HTMLDivElement>) => void;
    onClickEn: (event: React.MouseEvent<HTMLDivElement>) => void;
    onClickJa: (event: React.MouseEvent<HTMLDivElement>) => void;
    children: React.ReactNode;
  };

export const Layout: React.FC<Props> = ({
  terms,
  privacy,
  useNextLink,
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
    {children}
    <Footer terms={terms} privacy={privacy} useNextLink={useNextLink} />
  </Wrapper>
);
