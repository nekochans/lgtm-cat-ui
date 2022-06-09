import { CatFetchButton } from './';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/CatFetchButton/CatFetchButton.tsx',
  component: CatFetchButton,
} as Meta<typeof CatFetchButton>;

type Story = ComponentStoryObj<typeof CatFetchButton>;

export const CatsRefreshButton: Story = {
  args: {
    type: 'refresh',
  },
};

export const NewArrivalCatsButton: Story = {
  args: {
    type: 'new',
  },
};
