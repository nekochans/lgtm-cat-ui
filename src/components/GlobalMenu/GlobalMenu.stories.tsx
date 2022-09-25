import type { ComponentStoryObj } from '@storybook/react';
import { GlobalMenu } from './';

export default {
  component: GlobalMenu,
};

type Story = ComponentStoryObj<typeof GlobalMenu>;

export const ViewInJapanese: Story = {
  args: { language: 'ja' },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};
