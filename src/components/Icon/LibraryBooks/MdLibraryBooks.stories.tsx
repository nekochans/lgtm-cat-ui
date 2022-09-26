import type { ComponentStoryObj } from '@storybook/react';
import { LibraryBooks } from './';

export default {
  component: LibraryBooks,
};

type Story = ComponentStoryObj<typeof LibraryBooks>;

export const Default: Story = {
  args: { text: '利用規約' },
};
