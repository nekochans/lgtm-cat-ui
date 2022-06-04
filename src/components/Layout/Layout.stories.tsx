import React from 'react';

import { Layout } from './';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/Layout/Layout.tsx',
  component: Layout,
} as Meta<typeof Layout>;

type Story = ComponentStoryObj<typeof Layout>;

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
  },
};
