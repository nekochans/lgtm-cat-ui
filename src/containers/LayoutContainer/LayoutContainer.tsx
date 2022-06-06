import React from 'react';
import { useSnapshot } from 'valtio';

import { Layout } from '../../components';
import {
  headerStateSelector,
  updateIsLanguageMenuDisplayed,
  updateLanguage,
} from '../../stores/valtio/header';

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

export const LayoutContainer: React.FC<Props> = ({ useNextLink, children }) => {
  const snap = useSnapshot(headerStateSelector());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClickLanguageButton = (event: React.MouseEvent<HTMLDivElement>) => {
    updateIsLanguageMenuDisplayed(!snap.isLanguageMenuDisplayed);
  };

  const jaTerms = {
    text: jpTermsText,
    link: useNextLink ? termsPath : termsUrl,
  } as const;

  const jaPrivacy = {
    text: jpPrivacyText,
    link: useNextLink ? privacyPath : privacyUrl,
  } as const;

  const enTerms = {
    text: enTermsText,
    link: useNextLink ? termsPath : termsUrl,
  } as const;

  const enPrivacy = {
    text: enPrivacyText,
    link: useNextLink ? privacyPath : privacyUrl,
  } as const;

  const terms = snap.language === 'ja' ? jaTerms : enTerms;

  const privacy = snap.language === 'ja' ? jaPrivacy : enPrivacy;

  return (
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
  );
};
