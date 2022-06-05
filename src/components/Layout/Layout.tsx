import React from 'react';
import styled from 'styled-components';

import { Footer, Props as FooterProps } from '../Footer';
import { Header, Props as HeaderProps } from '../Header';

const Wrapper = styled.div`
  position: relative;
`;

type Props = FooterProps &
  HeaderProps & {
    children: React.ReactNode;
  };

export const Layout: React.FC<Props> = ({
  terms,
  privacy,
  useNextLink,
  language,
  children,
}) => (
  <Wrapper>
    <Header language={language} />
    {children}
    <Footer terms={terms} privacy={privacy} useNextLink={useNextLink} />
  </Wrapper>
);
