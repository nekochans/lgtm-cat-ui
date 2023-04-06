import type { StoryObj } from '@storybook/react';
import { UploadTitleArea } from './index';

export default {
  component: UploadTitleArea,
};

type Story = StoryObj<typeof UploadTitleArea>;

export const ViewInJapanese: Story = {
  args: { language: 'ja' },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};
