import type { Meta, StoryObj } from '@storybook/react';
import { CatButtonGroup } from './';

const meta: Meta<typeof CatButtonGroup> = {
  component: CatButtonGroup,
};

export default meta;

type Story = StoryObj<typeof CatButtonGroup>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/require-await
const onClickFetchRandomCatButton = async () => {
  console.log('call onClickFetchRandomCatButton');
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/require-await
const onClickFetchNewArrivalCatButton = async () => {
  console.log('call onClickFetchNewArrivalCatButton');
};

export const Default: Story = {
  args: {
    onClickFetchRandomCatButton,
    onClickFetchNewArrivalCatButton,
  },
};
