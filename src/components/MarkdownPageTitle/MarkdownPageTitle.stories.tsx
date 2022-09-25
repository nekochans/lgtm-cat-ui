import type { ComponentStoryObj, Meta } from '@storybook/react';
import { MarkdownPageTitle } from './';

export default {
  title: 'src/components/MarkdownPageTitle/MarkdownPageTitle.tsx',
  component: MarkdownPageTitle,
} as Meta<typeof MarkdownPageTitle>;

type Story = ComponentStoryObj<typeof MarkdownPageTitle>;

export const Default: Story = {
  args: { text: '利用規約' },
};
