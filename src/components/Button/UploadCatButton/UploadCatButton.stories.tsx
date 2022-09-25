import type { ComponentStoryObj, Meta } from '@storybook/react';
import { UploadCatButton } from './index';

export default {
  title: 'src/components/Button/UploadCatButton/UploadCatButton.tsx',
  component: UploadCatButton,
} as Meta<typeof UploadCatButton>;

type Story = ComponentStoryObj<typeof UploadCatButton>;

export const Default: Story = {
  args: {
    link: '/upload',
  },
};
