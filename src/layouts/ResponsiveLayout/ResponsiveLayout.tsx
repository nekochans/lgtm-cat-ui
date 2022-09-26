import type { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { Footer, Props as FooterProps } from '../../components/Footer';
import { Header, Props as HeaderProps } from '../../components/Header';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  gap: 64px;
  min-height: 100vh;
`;

const ContentsWrapper = styled.div`
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  vertical-align: middle;
`;

export type Props = FooterProps & HeaderProps & { children: ReactNode };

export const ResponsiveLayout: FC<Props> = ({
  language,
  isLanguageMenuDisplayed,
  onClickLanguageButton,
  currentUrlPath,
  children,
}) => (
  <Wrapper>
    <Header
      language={language}
      isLanguageMenuDisplayed={isLanguageMenuDisplayed}
      onClickLanguageButton={onClickLanguageButton}
      currentUrlPath={currentUrlPath}
    />
    <ContentsWrapper>{children}</ContentsWrapper>
    <Footer language={language} />
  </Wrapper>
);
