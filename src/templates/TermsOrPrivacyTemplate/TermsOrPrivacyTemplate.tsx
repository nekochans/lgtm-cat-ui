import { FC } from 'react';
import styled from 'styled-components';

import { LibraryBooks } from '../../components/Icon/LibraryBooks';
import { MarkdownContents } from '../../components/MarkdownContents';
import { MarkdownPageTitle } from '../../components/MarkdownPageTitle';
import { createLinksFromLanguages as createPrivacyPolicyLinksFromLanguages } from '../../features/privacyPolicy';
import { createLinksFromLanguages as createTermsOfUseLinksFromLanguages } from '../../features/termsOfUse';
import { useSwitchLanguage } from '../../hooks/useSwitchLanguage';
import { ResponsiveLayout } from '../../layouts';
import { Language } from '../../types/language';
import assertNever from '../../utils/assertNever';

type TemplateType = 'terms' | 'privacy';

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

type Props = {
  type: TemplateType;
  language: Language;
  markdown: string;
};

export const TermsOrPrivacyTemplate: FC<Props> = ({
  type,
  language,
  markdown,
}) => {
  const {
    isLanguageMenuDisplayed,
    selectedLanguage,
    onClickEn,
    onClickJa,
    onClickLanguageButton,
    onClickOutSideMenu,
  } = useSwitchLanguage(language);

  return (
    <div onClick={onClickOutSideMenu} aria-hidden="true">
      <ResponsiveLayout
        language={selectedLanguage}
        onClickJa={onClickJa}
        onClickEn={onClickEn}
        isLanguageMenuDisplayed={isLanguageMenuDisplayed}
        onClickLanguageButton={onClickLanguageButton}
      >
        <Wrapper>
          <MarkdownPageTitle text={createTitle(type, selectedLanguage)} />
          <LibraryBooks />
          <MarkdownContents markdown={markdown} />
        </Wrapper>
      </ResponsiveLayout>
    </div>
  );
};
