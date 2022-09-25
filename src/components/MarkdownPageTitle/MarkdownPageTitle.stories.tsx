import type { ComponentStoryObj } from '@storybook/react';
import { MarkdownPageTitle } from './';

export default {
  component: MarkdownPageTitle,
};

type Story = ComponentStoryObj<typeof MarkdownPageTitle>;

export const Default: Story = {
  args: { text: '利用規約' },
};
