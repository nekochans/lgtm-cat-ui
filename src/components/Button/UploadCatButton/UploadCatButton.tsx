import Link from 'next/link';
import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import styled from 'styled-components';

import { mixins } from '../../../styles/mixins';

import slash from './slash.png';

const StyledSpan = styled.span`
  background: #eb7c06 url(${slash.src});
  ${mixins.buttonBase};
`;

const Text = styled.div`
  ${mixins.buttonText};
`;

const faCloudUploadAltStyle = {
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '26px',
  lineHeight: '26px',
  color: '#f2ebdf',
  flex: 'none',
  order: 0,
  flexGrow: 0,
};

type Props = {
  link: `/${string}`;
};

export const UploadCatButton: React.FC<Props> = ({ link }) => (
  <Link href={link} prefetch={false}>
    <StyledSpan>
      <FaCloudUploadAlt style={faCloudUploadAltStyle} />
      <Text>Upload new Cats</Text>
    </StyledSpan>
  </Link>
);
