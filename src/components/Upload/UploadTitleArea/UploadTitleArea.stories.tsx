import type { ComponentStoryObj } from '@storybook/react';
import { UploadTitleArea } from './index';

export default {
  component: UploadTitleArea,
};

type Story = ComponentStoryObj<typeof UploadTitleArea>;

export const ViewInJapanese: Story = {
  args: { language: 'ja' },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};
