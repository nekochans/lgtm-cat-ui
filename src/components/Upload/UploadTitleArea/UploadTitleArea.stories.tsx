import { UploadTitleArea } from './index';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/Upload/UploadTitleArea/UploadTitleArea.tsx',
  component: UploadTitleArea,
} as Meta<typeof UploadTitleArea>;

type Story = ComponentStoryObj<typeof UploadTitleArea>;

export const ViewInJapanese: Story = {
  args: { language: 'ja' },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};
