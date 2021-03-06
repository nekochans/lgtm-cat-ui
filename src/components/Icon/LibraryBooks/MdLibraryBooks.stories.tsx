import { LibraryBooks } from './';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/Icon/LibraryBooks/LibraryBooks.tsx',
  component: LibraryBooks,
} as Meta<typeof LibraryBooks>;

type Story = ComponentStoryObj<typeof LibraryBooks>;

export const Default: Story = {
  args: { text: '利用規約' },
};
