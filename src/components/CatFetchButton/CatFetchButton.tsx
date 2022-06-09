import React from 'react';
import { FaSyncAlt } from 'react-icons/fa';
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

const buttonText = (type: ButtonType) => {
  switch (type) {
    case 'refresh':
      return 'Cats Refresh';
    case 'new':
      return 'New arrival Cats';
    default:
      return assertNever(type);
  }
};

type ButtonType = 'refresh' | 'new';

type Props = {
  type: ButtonType;
};

export const CatFetchButton: React.FC<Props> = ({ type }) => (
  <StyledButton>
    <FaSyncAlt style={faSyncAltStyle} />
    <Text>{buttonText(type)}</Text>
  </StyledButton>
);
