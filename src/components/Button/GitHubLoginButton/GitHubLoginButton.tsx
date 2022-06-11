import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

import { mixins } from '../../../styles/mixins';

const StyledGitHubLoginButton = styled.button`
  background: ${mixins.colors.primary};
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

export const GitHubLoginButton: React.FC = () => (
  <StyledGitHubLoginButton>
    <FaGithub style={faGithubStyle} />
    <Text>Login</Text>
  </StyledGitHubLoginButton>
);
