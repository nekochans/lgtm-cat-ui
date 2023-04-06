import type { StoryObj } from '@storybook/react';
import { MarkdownPageTitle } from './';

export default {
  component: MarkdownPageTitle,
};

type Story = StoryObj<typeof MarkdownPageTitle>;

export const Default: Story = {
  args: { text: '利用規約' },
};
