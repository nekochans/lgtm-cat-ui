import type { ComponentStoryObj } from '@storybook/react';
import { UploadCatButton } from './index';

export default {
  component: UploadCatButton,
};

type Story = ComponentStoryObj<typeof UploadCatButton>;

export const Default: Story = {
  args: {
    link: '/upload',
  },
};
