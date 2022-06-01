import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const StyledGitHubLoginButton = styled.button`
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 10px;
  align-items: center;
  order: 0;
  width: 116px;
  height: 36px;
  padding: 4px 20px;
  background: #eb7c06;
  border-radius: 4px;
`;

const Text = styled.div`
  flex: none;
  flex-grow: 0;
  order: 1;
  width: 40px;
  height: 16px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: #f2ebdf;
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
