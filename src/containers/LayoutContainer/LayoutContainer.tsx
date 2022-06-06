import React from 'react';
import { useSnapshot } from 'valtio';

import { Layout } from '../../components';
import {
  headerStateSelector,
  updateIsLanguageMenuDisplayed,
  updateLanguage,
} from '../../stores/valtio/header';
import { Language } from '../../types/language';
import assertNever from '../../utils/assertNever';

type Props = {
  useNextLink: boolean;
  children: React.ReactNode;
};

const termsPath = '/terms';

const privacyPath = '/privacy';

const jpTermsText = '利用規約';

const jpPrivacyText = 'プライバシーポリシー';

const enTermsText = 'Terms of Use';

const enPrivacyText = 'Privacy Policy';

const baseUrl = 'https://lgtmeow.com';

const termsUrl = `${baseUrl}${termsPath}` as const;

const privacyUrl = `${baseUrl}${privacyPath}` as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onClickEn = (event: React.MouseEvent<HTMLDivElement>) => {
  updateLanguage('en');
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onClickJa = (event: React.MouseEvent<HTMLDivElement>) => {
  updateLanguage('ja');
};

const createTerms = (language: Language, useNextLink: boolean) => {
  switch (language) {
    case 'ja':
      return {
        text: jpTermsText,
        link: useNextLink ? termsPath : termsUrl,
      } as const;
    case 'en':
      return {
        text: enTermsText,
        link: useNextLink ? termsPath : termsUrl,
      } as const;
    default:
      return assertNever(language);
  }
};

const createPrivacy = (language: Language, useNextLink: boolean) => {
  switch (language) {
    case 'ja':
      return {
        text: jpPrivacyText,
        link: useNextLink ? privacyPath : privacyUrl,
      } as const;
    case 'en':
      return {
        text: enPrivacyText,
        link: useNextLink ? privacyPath : privacyUrl,
      } as const;
    default:
      return assertNever(language);
  }
};

export const LayoutContainer: React.FC<Props> = ({ useNextLink, children }) => {
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

  const terms = createTerms(snap.language, useNextLink);

  const privacy = createPrivacy(snap.language, useNextLink);

  return (
    <div onClick={onClickOutSideMenu} aria-hidden="true">
      <Layout
        terms={terms}
        privacy={privacy}
        useNextLink={useNextLink}
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
