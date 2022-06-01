import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const StyledGitHubLoginButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  width: 117px;
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
  height: 28px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #f2ede4;
`;

export const GitHubLoginButton: React.FC = () => (
  <StyledGitHubLoginButton>
    <FaGithub style={{ width: '27px', height: '26.33px', color: '#fff' }} />
    <Text>Login</Text>
  </StyledGitHubLoginButton>
);
