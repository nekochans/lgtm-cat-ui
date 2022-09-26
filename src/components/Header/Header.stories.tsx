import type { ComponentStoryObj } from '@storybook/react';
import { Header } from './';

export default {
  component: Header,
};

type Story = ComponentStoryObj<typeof Header>;

export const LanguageJa: Story = {
  args: {
    language: 'ja',
  },
};

export const LanguageEn: Story = {
  args: {
    language: 'en',
  },
};
