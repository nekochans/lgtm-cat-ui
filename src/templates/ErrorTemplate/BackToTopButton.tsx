import Link from 'next/link';
import styled from 'styled-components';

import type { FC } from 'react';

const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  cursor: pointer;
  background: #eb7c06;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
`;

const Text = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 144px;
  height: 18px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: #fff;
  &:hover {
    opacity: 0.8;
  }
`;

type Props = {
  text: string;
};

export const BackToTopButton: FC<Props> = ({ text }) => (
  <Link href="/" prefetch={false}>
    <StyledSpan>
      <Text>{text}</Text>
    </StyledSpan>
  </Link>
);
