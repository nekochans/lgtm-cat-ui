import type { StoryObj } from '@storybook/react';
import { CatFetchButton } from '.';

export default {
  component: CatFetchButton,
};

type Story = StoryObj<typeof CatFetchButton>;

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
