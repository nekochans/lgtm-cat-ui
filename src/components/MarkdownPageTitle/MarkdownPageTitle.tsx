import styled from 'styled-components';

import type { FC } from 'react';

const StyledTitle = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: #362e2b;
`;

export type Props = {
  text: string;
};

export const MarkdownPageTitle: FC<Props> = ({ text }) => (
  <StyledTitle>{text}</StyledTitle>
);
