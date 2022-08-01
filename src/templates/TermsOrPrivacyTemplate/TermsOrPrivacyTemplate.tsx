import { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';

import { LibraryBooks } from '../../components/Icon/LibraryBooks';
import { MarkdownContents } from '../../components/MarkdownContents';
import { MarkdownPageTitle } from '../../components/MarkdownPageTitle';
import { createLinksFromLanguages as createPrivacyPolicyLinksFromLanguages } from '../../features/privacyPolicy';
import { createLinksFromLanguages as createTermsOfUseLinksFromLanguages } from '../../features/termsOfUse';
import { ResponsiveLayout } from '../../layouts';
import {
  headerStateSelector,
  updateIsLanguageMenuDisplayed,
  updateLanguage,
} from '../../stores/valtio/common';
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onClickEn = (event: MouseEvent<HTMLDivElement>) => {
  updateLanguage('en');
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onClickJa = (event: MouseEvent<HTMLDivElement>) => {
  updateLanguage('ja');
};

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
  const snap = useSnapshot(headerStateSelector());

  const { isLanguageMenuDisplayed } = snap;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClickLanguageButton = (event: MouseEvent<HTMLDivElement>) => {
    updateIsLanguageMenuDisplayed(!isLanguageMenuDisplayed);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClickOutSideMenu = (event: MouseEvent<HTMLDivElement>) => {
    // メニューの外側をクリックしたときだけメニューを閉じる
    if (isLanguageMenuDisplayed) {
      updateIsLanguageMenuDisplayed(false);
    }
  };

  const selectedLanguage = snap.language ? snap.language : language;

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
