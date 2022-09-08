import { CatRandomCopyButton } from '.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/Button/CatRandomCopyButton/CatRandomCopyButton.tsx',
  component: CatRandomCopyButton,
} as Meta<typeof CatRandomCopyButton>;

type Story = ComponentStoryObj<typeof CatRandomCopyButton>;

const onClick = () =>
  // eslint-disable-next-line no-console
  console.log('CatRandomCopyButton Clicked!');

export const Default: Story = {
  args: {
    onClick,
  },
};
