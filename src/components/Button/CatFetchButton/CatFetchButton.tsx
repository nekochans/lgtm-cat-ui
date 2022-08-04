import { FaSyncAlt } from 'react-icons/fa';
import styled from 'styled-components';

import { mixins } from '../../../styles/mixins';
import assertNever from '../../../utils/assertNever';

import type { FC } from 'react';

const StyledButton = styled.button`
  background: #eb7c06;
  ${mixins.buttonBase};
`;

const Text = styled.div`
  ${mixins.buttonText};
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
  onClick: () => Promise<void>;
};

export const CatFetchButton: FC<Props> = ({ type, onClick }) => (
  <StyledButton onClick={onClick}>
    <FaSyncAlt style={faSyncAltStyle} />
    <Text>{buttonText(type)}</Text>
  </StyledButton>
);
