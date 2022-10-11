import type { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

import { mixins } from '../../../styles';

const _Button = styled.button`
  background: #eb7c06;
  ${mixins.buttonBase};
`;

const _Text = styled.div`
  ${mixins.buttonText};
`;

const faGithubStyle = {
  fontStyle: 'normal',
  fontWeight: 400,
  width: '26px',
  height: '26px',
  color: '#f2ebdf',
  flex: 'none',
  order: 1,
  flexGrow: 0,
};

export const GitHubLoginButton: FC = () => (
  <_Button>
    <FaGithub style={faGithubStyle} />
    <_Text>Login</_Text>
  </_Button>
);
