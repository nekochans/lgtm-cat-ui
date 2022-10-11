import type { FC } from 'react';
import styled from 'styled-components';

const _Title = styled.h1`
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
  <_Title>{text}</_Title>
);
