import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  bottom: 30%;
  left: 50%;
  padding: 3%;
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  transform: translate(-50%, 0);
`;

export const CopiedGithubMarkdownMessage: React.FC = () => (
  <Wrapper>Github Markdown Copied!</Wrapper>
);
