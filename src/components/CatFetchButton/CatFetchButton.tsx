import React from 'react';
import { FaSyncAlt, FaCloudUploadAlt } from 'react-icons/fa';
import styled from 'styled-components';

import { mixins } from '../../styles/mixins';
import assertNever from '../../utils/assertNever';

const StyledButton = styled.button`
  background: #eb7c06;
  ${mixins.buttonBase};
`;

const Text = styled.div`
  flex: none;
  flex-grow: 0;
  order: 1;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: #f2ebdf;
`;

const faSyncAltStyle = {
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '26px',
  lineHeight: '26px',
  color: '#f2ebdf',
  flex: 'none',
  order: 0,
  flexGrow: 0,
};

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

const buttonIcon = (type: ButtonType) => {
  switch (type) {
    case 'upload':
      return <FaCloudUploadAlt style={faCloudUploadAltStyle} />;
    case 'refresh':
    case 'new':
      return <FaSyncAlt style={faSyncAltStyle} />;
    default:
      return assertNever(type);
  }
};

const buttonText = (type: ButtonType) => {
  switch (type) {
    case 'upload':
      return 'Upload new Cats';
    case 'refresh':
      return 'Cats Refresh';
    case 'new':
      return 'New arrival Cats';
    default:
      return assertNever(type);
  }
};

type ButtonType = 'upload' | 'refresh' | 'new';

type Props = {
  type: ButtonType;
};

export const CatFetchButton: React.FC<Props> = ({ type }) => (
  <StyledButton>
    {buttonIcon(type)}
    <Text>{buttonText(type)}</Text>
  </StyledButton>
);
