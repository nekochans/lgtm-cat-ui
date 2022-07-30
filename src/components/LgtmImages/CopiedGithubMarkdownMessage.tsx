import styled from 'styled-components';

import type { FC } from 'react';

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

export const CopiedGithubMarkdownMessage: FC = () => (
  <Wrapper>Github Markdown Copied!</Wrapper>
);
