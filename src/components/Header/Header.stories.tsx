import type { StoryObj } from '@storybook/react';
import { Header } from './';

export default {
  component: Header,
};

type Story = StoryObj<typeof Header>;

export const LanguageJa: Story = {
  args: {
    language: 'ja',
    currentUrlPath: '/',
    isLanguageMenuDisplayed: false,
  },
};

export const LanguageJaMenuIsOpen: Story = {
  args: {
    language: 'ja',
    currentUrlPath: '/',
    isLanguageMenuDisplayed: true,
  },
};

export const LanguageEn: Story = {
  args: {
    language: 'en',
    currentUrlPath: '/',
    isLanguageMenuDisplayed: false,
  },
};

export const LanguageEnMenuIsOpen: Story = {
  args: {
    language: 'en',
    currentUrlPath: '/',
    isLanguageMenuDisplayed: true,
  },
};
