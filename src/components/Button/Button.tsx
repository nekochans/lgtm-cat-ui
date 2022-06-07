import React from 'react';
import { FaSyncAlt } from 'react-icons/fa';
import styled from 'styled-components';

const StyledButton = styled.div`
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 10px;
  align-items: center;
  order: 1;
  width: 168px;
  padding: 7px 20px;
  background: #eb7c06;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
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

export const Button: React.FC = () => (
  <StyledButton>
    <FaSyncAlt style={faSyncAltStyle} />
    <Text>Cats Refresh</Text>
  </StyledButton>
);
