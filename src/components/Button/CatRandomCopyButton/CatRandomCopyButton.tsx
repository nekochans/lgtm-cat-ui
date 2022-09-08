import { FaRandom } from 'react-icons/fa';
import styled from 'styled-components';

import { mixins } from '../../../styles/mixins';
import slash from '../images/slash.png';

import type { FC, ComponentProps } from 'react';

const StyledButton = styled.button`
  ${mixins.buttonBase};
  width: 227px;
  background: #eb7c06 url(${slash.src}) repeat 0 0/16px auto;
`;

const Text = styled.div`
  ${mixins.buttonText};
`;

const faRandomStyle = {
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '26px',
  lineHeight: '26px',
  color: '#fff',
  flex: 'none',
  order: 0,
  flexGrow: 0,
};

type Props = ComponentProps<'button'>;

export const CatRandomCopyButton: FC<Props> = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <FaRandom style={faRandomStyle} />
    <Text>Cats Random Copied</Text>
  </StyledButton>
);
