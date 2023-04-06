import type { StoryObj } from '@storybook/react';
import { UploadCatButton } from './index';

export default {
  component: UploadCatButton,
};

type Story = StoryObj<typeof UploadCatButton>;

export const Default: Story = {
  args: {
    link: '/upload',
  },
};
