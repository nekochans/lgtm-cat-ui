import type { FC } from 'react';
import styled from 'styled-components';
import { mixins } from '../../styles';

const _Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: ${mixins.colors.text};
`;

export type Props = {
  text: string;
};

export const MarkdownPageTitle: FC<Props> = ({ text }) => (
  <_Title>{text}</_Title>
);
