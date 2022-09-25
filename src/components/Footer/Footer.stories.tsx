import type { ComponentStoryObj } from '@storybook/react';
import { Footer } from './';

export default {
  component: Footer,
};

type Story = ComponentStoryObj<typeof Footer>;

export const ViewInJapanese: Story = {
  args: { language: 'ja' },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};
