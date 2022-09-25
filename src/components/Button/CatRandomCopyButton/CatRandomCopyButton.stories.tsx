import type { ComponentStoryObj, Meta } from '@storybook/react';
import { CatRandomCopyButton } from '.';

export default {
  title: 'src/components/Button/CatRandomCopyButton/CatRandomCopyButton.tsx',
  component: CatRandomCopyButton,
} as Meta<typeof CatRandomCopyButton>;

type Story = ComponentStoryObj<typeof CatRandomCopyButton>;

const callback = () =>
  // eslint-disable-next-line no-console
  console.log('CatRandomCopyButton Clicked!');

export const Default: Story = {
  args: {
    imageUrl:
      'https://lgtm-images.lgtmeow.com/2022/09/14/11/151f27e7-f9fd-4093-8f87-cd95d9cdadb3.webp',
    callback,
  },
};
