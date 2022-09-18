import Link from 'next/link';
import styled from 'styled-components';

import { Language } from '../../types';
import { assertNever } from '../../utils/assertNever';

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

const backToTopPageText = {
  ja: 'トップページに戻る',
  en: 'Back to Top Page',
} as const;

type BackToTopPageText =
  typeof backToTopPageText[keyof typeof backToTopPageText];

const createBackToTopPageText = (language: Language): BackToTopPageText => {
  switch (language) {
    case 'ja':
      return backToTopPageText.ja;
    case 'en':
      return backToTopPageText.en;
    default:
      return assertNever(language);
  }
};

type Props = {
  language: Language;
};

export const BackToTopButton: FC<Props> = ({ language }) => (
  <Link href="/" prefetch={false}>
    <StyledSpan>
      <Text>{createBackToTopPageText(language)}</Text>
    </StyledSpan>
  </Link>
);
