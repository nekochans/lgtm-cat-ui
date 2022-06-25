import { BackToTopButton } from './index';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/Button/BackToTopButton/BackToTopButton.tsx',
  component: BackToTopButton,
} as Meta<typeof BackToTopButton>;

type Story = ComponentStoryObj<typeof BackToTopButton>;

export const ViewInJapanese: Story = {
  args: {
    text: 'トップページに戻る',
  },
};

export const ViewInEnglish: Story = {
  args: {
    text: 'Back to Top Page',
  },
};
