import type { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { Footer, type Props as FooterProps } from '../../components/Footer';
import { Header, type Props as HeaderProps } from '../../components/Header';

const _Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  gap: 64px;
  min-height: 100vh;
`;

const _ContentsWrapper = styled.div`
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
  <_Wrapper>
    <Header
      language={language}
      isLanguageMenuDisplayed={isLanguageMenuDisplayed}
      onClickLanguageButton={onClickLanguageButton}
      currentUrlPath={currentUrlPath}
    />
    <_ContentsWrapper>{children}</_ContentsWrapper>
    <Footer language={language} />
  </_Wrapper>
);
