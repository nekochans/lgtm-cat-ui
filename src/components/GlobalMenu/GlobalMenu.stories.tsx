import type { StoryObj } from '@storybook/react';
import { GlobalMenu } from './';

export default {
  component: GlobalMenu,
};

type Story = StoryObj<typeof GlobalMenu>;

export const ViewInJapanese: Story = {
  args: { language: 'ja' },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};
