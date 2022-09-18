import styled from 'styled-components';

import { LibraryBooks } from '../../components/Icon/LibraryBooks';
import { MarkdownPageTitle } from '../../components/MarkdownPageTitle';
import { createPrivacyPolicyLinksFromLanguages } from '../../features/privacyPolicy';
import { createTermsOfUseLinksFromLanguages } from '../../features/termsOfUse';
import { ResponsiveLayout } from '../../layouts';
import { Language } from '../../types';
import { assertNever } from '../../utils/assertNever';

import type { FC, MouseEventHandler, ReactNode } from 'react';

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 750px;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-style: normal;
  line-height: 25px;
  text-align: left;
  overflow-wrap: normal;
  list-style-position: inside;
  @media (max-width: 767px) {
    max-width: 380px;
  }
`;

type Props = {
  type: TemplateType;
  language: Language;
  isLanguageMenuDisplayed: boolean;
  onClickEn: MouseEventHandler;
  onClickJa: MouseEventHandler;
  onClickLanguageButton: MouseEventHandler;
  onClickOutSideMenu: MouseEventHandler;
  children: ReactNode;
};

export const TermsOrPrivacyTemplate: FC<Props> = ({
  type,
  language,
  isLanguageMenuDisplayed,
  onClickEn,
  onClickJa,
  onClickLanguageButton,
  onClickOutSideMenu,
  children,
}) => (
  <div onClick={onClickOutSideMenu} aria-hidden="true">
    <ResponsiveLayout
      language={language}
      onClickJa={onClickJa}
      onClickEn={onClickEn}
      isLanguageMenuDisplayed={isLanguageMenuDisplayed}
      onClickLanguageButton={onClickLanguageButton}
    >
      <Wrapper>
        <MarkdownPageTitle text={createTitle(type, language)} />
        <LibraryBooks />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </Wrapper>
    </ResponsiveLayout>
  </div>
);
