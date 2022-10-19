import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { mixins } from '../../styles';
import type { Language } from '../../types';
import { assertNever } from '../../utils';

const _Span = styled.span`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  cursor: pointer;
  background: ${mixins.colors.primary};
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
`;

const _Text = styled.div`
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
    <_Span>
      <_Text>{createBackToTopPageText(language)}</_Text>
    </_Span>
  </Link>
);
