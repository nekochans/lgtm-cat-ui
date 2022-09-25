import type { ComponentStoryObj, Meta } from '@storybook/react';
import { Header } from './';

export default {
  title: 'src/components/Header/Header.tsx',
  component: Header,
} as Meta<typeof Header>;

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
