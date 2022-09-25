import type { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

import { mixins } from '../../../styles';

const StyledGitHubLoginButton = styled.button`
  background: #eb7c06;
  ${mixins.buttonBase};
`;

const Text = styled.div`
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
  <StyledGitHubLoginButton>
    <FaGithub style={faGithubStyle} />
    <Text>Login</Text>
  </StyledGitHubLoginButton>
);
