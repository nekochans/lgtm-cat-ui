import Link from 'next/link';
import type { FC } from 'react';
import type { Language } from '../../types';
import { assertNever } from '../../utils';
import styles from './BackToTopButton.module.css';

const backToTopPageText = {
  ja: 'トップページに戻る',
  en: 'Back to Top Page',
} as const;

type BackToTopPageText =
  (typeof backToTopPageText)[keyof typeof backToTopPageText];

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
  <Link href="/" prefetch={false} className={styles.link}>
    <span className={styles.span}>
      <span className={styles.text}>{createBackToTopPageText(language)}</span>
    </span>
  </Link>
);
