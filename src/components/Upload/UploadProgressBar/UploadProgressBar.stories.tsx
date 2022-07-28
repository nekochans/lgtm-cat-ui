import { UploadProgressBar } from '.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/Upload/UploadProgressBar/UploadProgressBar.tsx',
  component: UploadProgressBar,
} as Meta<typeof UploadProgressBar>;

type Story = ComponentStoryObj<typeof UploadProgressBar>;

export const ViewInJapanese: Story = {
  args: { language: 'ja' },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};
