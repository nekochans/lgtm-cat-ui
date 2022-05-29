import React from 'react';

import { Footer } from './';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/Footer/Footer.tsx',
  component: Footer,
} as Meta<typeof Footer>;

type Story = ComponentStoryObj<typeof Footer>;

const termsUrl = 'https://lgtmeow.com/terms';

const privacyUrl = 'https://lgtmeow.com/privacy';

export const ViewInJapanese: Story = {
  args: {
    terms: {
      linkText: <a href={termsUrl}>利用規約</a>,
    },
    privacy: {
      linkText: <a href={privacyUrl}>プライバシーポリシー</a>,
    },
  },
};

export const ViewInEnglish: Story = {
  args: {
    terms: {
      linkText: <a href={termsUrl}>Terms of Use</a>,
    },
    privacy: {
      linkText: <a href={privacyUrl}>Privacy Policy</a>,
    },
  },
};
