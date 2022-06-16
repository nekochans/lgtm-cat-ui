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
      link: termsPath,
    },
    privacy: {
      text: jpPrivacyText,
      link: privacyPath,
    },
    language: 'ja',
    children: <JpContents />,
  },
};

export const ViewInEnglish: Story = {
  args: {
    terms: {
      text: enTermsText,
      link: termsPath,
    },
    privacy: {
      text: enPrivacyText,
      link: privacyPath,
    },
    language: 'en',
    children: <EnContents />,
  },
};
