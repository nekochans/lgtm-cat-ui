import styled from 'styled-components';

import { Footer, Props as FooterProps } from '../../components/Footer';
import { Header, Props as HeaderProps } from '../../components/Header';

import type { FC, ReactNode } from 'react';

const Wrapper = styled.div`
  position: relative;
`;

const ContentsWrapper = styled.div`
  display: block;
  margin: 16px auto;
  text-align: center;
`;

export type Props = FooterProps & HeaderProps & { children: ReactNode };

export const ResponsiveLayout: FC<Props> = ({
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
    <Footer language={language} />
  </Wrapper>
);
