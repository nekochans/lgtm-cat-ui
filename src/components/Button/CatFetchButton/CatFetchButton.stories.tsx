import type { ComponentStoryObj, Meta } from '@storybook/react';
import { CatFetchButton } from '.';

export default {
  title: 'src/components/Button/CatFetchButton/CatFetchButton.tsx',
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
