import React from 'react';

import { Layout, Props as LayoutProps } from '../../components/Layout';

type Props = LayoutProps;

export const LayoutContainer: React.FC<Props> = ({
  terms,
  privacy,
  useNextLink,
  language,
  children,
}) => (
  <Layout
    terms={terms}
    privacy={privacy}
    useNextLink={useNextLink}
    language={language}
  >
    {children}
  </Layout>
);
