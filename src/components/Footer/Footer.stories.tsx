import type { StoryObj } from '@storybook/react';
import { Footer } from './';

export default {
  component: Footer,
};

type Story = StoryObj<typeof Footer>;

export const ViewInJapanese: Story = {
  args: { language: 'ja' },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};
