import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import styled from 'styled-components';

import { mixins } from '../../../styles/mixins';

import slash from './slash.png';

const StyledButton = styled.span`
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

export const UploadCatButton: React.FC = () => (
  <StyledButton>
    <FaCloudUploadAlt style={faCloudUploadAltStyle} />
    <Text>Upload new Cats</Text>
  </StyledButton>
);
