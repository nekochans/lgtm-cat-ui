import type { FC, MouseEventHandler, ReactNode } from 'react';
import { LibraryBooks } from '../../components';
import { MarkdownPageTitle } from '../../components/MarkdownPageTitle';
import {
  createPrivacyPolicyLinksFromLanguages,
  createTermsOfUseLinksFromLanguages,
} from '../../features';
import { ResponsiveLayout } from '../../layouts';
import type { Language } from '../../types';
import { assertNever } from '../../utils';
import styles from './TermsOrPrivacyTemplate.module.css';

export type TemplateType = 'terms' | 'privacy';

const createTitle = (type: TemplateType, language: Language): string => {
  switch (type) {
    case 'privacy':
      return createPrivacyPolicyLinksFromLanguages(language).text;
    case 'terms':
      return createTermsOfUseLinksFromLanguages(language).text;
    default:
      return assertNever(type);
  }
};

type Props = {
  type: TemplateType;
  language: Language;
  isLanguageMenuDisplayed: boolean;
  onClickLanguageButton: MouseEventHandler;
  onClickOutSideMenu: MouseEventHandler;
  children: ReactNode;
};

export const TermsOrPrivacyTemplate: FC<Props> = ({
  type,
  language,
  isLanguageMenuDisplayed,
  onClickLanguageButton,
  onClickOutSideMenu,
  children,
}) => {
  const currentUrlPath =
    type === 'terms'
      ? createTermsOfUseLinksFromLanguages(language).link
      : createPrivacyPolicyLinksFromLanguages(language).link;

  return (
    <div onClick={onClickOutSideMenu} aria-hidden="true">
      <ResponsiveLayout
        language={language}
        isLanguageMenuDisplayed={isLanguageMenuDisplayed}
        onClickLanguageButton={onClickLanguageButton}
        currentUrlPath={currentUrlPath}
      >
        <div className={styles.wrapper}>
          <MarkdownPageTitle text={createTitle(type, language)} />
          <LibraryBooks />
          <div className={styles['children-wrapper']}>{children}</div>
        </div>
      </ResponsiveLayout>
    </div>
  );
};
