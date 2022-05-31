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
      text: '利用規約',
      link: termsUrl,
    },
    privacy: {
      text: 'プライバシーポリシー',
      link: privacyUrl,
    },
  },
};

export const ViewInEnglish: Story = {
  args: {
    terms: {
      text: 'Terms of Use',
      link: termsUrl,
    },
    privacy: {
      text: 'Privacy Policy',
      link: privacyUrl,
    },
  },
};
