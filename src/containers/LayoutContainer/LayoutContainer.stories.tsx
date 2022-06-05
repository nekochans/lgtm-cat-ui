import React from 'react';

import { LayoutContainer } from './.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/containers/LayoutContainer/LayoutContainer.tsx',
  component: LayoutContainer,
} as Meta<typeof LayoutContainer>;

type Story = ComponentStoryObj<typeof LayoutContainer>;

const termsPath = '/terms';

const privacyPath = '/privacy';

const jpTermsText = '利用規約';

const jpPrivacyText = 'プライバシーポリシー';

const enTermsText = 'Terms of Use';

const enPrivacyText = 'Privacy Policy';

const baseUrl = 'https://lgtmeow.com';

const termsUrl = `${baseUrl}${termsPath}` as const;

const privacyUrl = `${baseUrl}${privacyPath}` as const;

const JpContents: React.FC = () => (
  <>
    <h1>タイトル</h1>
    <h2>サブタイトル</h2>
    <p>コンテンツ</p>
  </>
);

const EnContents: React.FC = () => (
  <>
    <h1>Title</h1>
    <h2>SubTitle</h2>
    <p>Contents</p>
  </>
);

export const ViewInJapanese: Story = {
  args: {
    terms: {
      text: jpTermsText,
      link: termsUrl,
    },
    privacy: {
      text: jpPrivacyText,
      link: privacyUrl,
    },
    language: 'ja',
    children: <JpContents />,
  },
};

export const ViewInEnglish: Story = {
  args: {
    terms: {
      text: enTermsText,
      link: termsUrl,
    },
    privacy: {
      text: enPrivacyText,
      link: privacyUrl,
    },
    language: 'en',
    children: <EnContents />,
  },
};

export const ViewInJapaneseWithNextLink: Story = {
  args: {
    terms: {
      text: jpTermsText,
      link: termsPath,
    },
    privacy: {
      text: jpPrivacyText,
      link: privacyPath,
    },
    useNextLink: true,
    language: 'ja',
    children: <JpContents />,
  },
};

export const ViewInEnglishWithNextLink: Story = {
  args: {
    terms: {
      text: enTermsText,
      link: termsPath,
    },
    privacy: {
      text: enPrivacyText,
      link: privacyPath,
    },
    useNextLink: true,
    language: 'en',
    children: <EnContents />,
  },
};
