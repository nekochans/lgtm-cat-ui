import React from 'react';
import styled from 'styled-components';

import { Footer, Props as FooterProps } from '../Footer';
import { Header } from '../Header';

const Wrapper = styled.div`
  position: relative;
`;

type Props = FooterProps & {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({
  terms,
  privacy,
  useNextLink,
  children,
}) => (
  <Wrapper>
    <Header />
    {children}
    <Footer terms={terms} privacy={privacy} useNextLink={useNextLink} />
  </Wrapper>
);
