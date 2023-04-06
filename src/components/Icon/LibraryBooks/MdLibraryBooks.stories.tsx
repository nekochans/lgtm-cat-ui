import type { StoryObj } from '@storybook/react';
import { LibraryBooks } from './';

export default {
  component: LibraryBooks,
};

type Story = StoryObj<typeof LibraryBooks>;

export const Default: Story = {
  args: { text: '利用規約' },
};
