import React from 'react';
import { useSnapshot } from 'valtio';

import { Layout } from '../../layouts';
import {
  headerStateSelector,
  updateIsLanguageMenuDisplayed,
  updateLanguage,
} from '../../stores/valtio/header';
import { Language } from '../../types/language';
import assertNever from '../../utils/assertNever';

type Props = {
  children: React.ReactNode;
};

const termsPath = '/terms';

const privacyPath = '/privacy';

const jpTermsText = '利用規約';

const jpPrivacyText = 'プライバシーポリシー';

const enTermsText = 'Terms of Use';

const enPrivacyText = 'Privacy Policy';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onClickEn = (event: React.MouseEvent<HTMLDivElement>) => {
  updateLanguage('en');
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onClickJa = (event: React.MouseEvent<HTMLDivElement>) => {
  updateLanguage('ja');
};

const createTerms = (language: Language) => {
  switch (language) {
    case 'ja':
      return {
        text: jpTermsText,
        link: termsPath,
      } as const;
    case 'en':
      return {
        text: enTermsText,
        link: termsPath,
      } as const;
    default:
      return assertNever(language);
  }
};

const createPrivacy = (language: Language) => {
  switch (language) {
    case 'ja':
      return {
        text: jpPrivacyText,
        link: privacyPath,
      } as const;
    case 'en':
      return {
        text: enPrivacyText,
        link: privacyPath,
      } as const;
    default:
      return assertNever(language);
  }
};

export const LayoutContainer: React.FC<Props> = ({ children }) => {
  const snap = useSnapshot(headerStateSelector());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClickLanguageButton = (event: React.MouseEvent<HTMLDivElement>) => {
    updateIsLanguageMenuDisplayed(!snap.isLanguageMenuDisplayed);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClickOutSideMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    // メニューの外側をクリックしたときだけメニューを閉じる
    if (snap.isLanguageMenuDisplayed) {
      updateIsLanguageMenuDisplayed(false);
    }
  };

  const terms = createTerms(snap.language);

  const privacy = createPrivacy(snap.language);

  return (
    <div onClick={onClickOutSideMenu} aria-hidden="true">
      <Layout
        terms={terms}
        privacy={privacy}
        isLanguageMenuDisplayed={snap.isLanguageMenuDisplayed}
        language={snap.language}
        onClickLanguageButton={onClickLanguageButton}
        onClickEn={onClickEn}
        onClickJa={onClickJa}
      >
        {children}
      </Layout>
    </div>
  );
};
