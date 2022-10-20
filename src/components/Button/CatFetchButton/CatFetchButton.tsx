import type { FC } from 'react';
import { FaSyncAlt } from 'react-icons/fa';
import styled from 'styled-components';

import { mixins } from '../../../styles';
import { assertNever } from '../../../utils';

const _Button = styled.button`
  background: ${mixins.colors.primary};
  ${mixins.buttonBase};
`;

const _Text = styled.div`
  ${mixins.buttonText};
`;

const faSyncAltStyle = {
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '26px',
  lineHeight: '26px',
  color: `${mixins.colors.sub}`,
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
  <_Button onClick={onClick}>
    <FaSyncAlt style={faSyncAltStyle} />
    <_Text>{buttonText(type)}</_Text>
  </_Button>
);
