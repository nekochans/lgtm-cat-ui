import type { StoryObj } from '@storybook/react';
import { UploadProgressBar } from '.';

export default {
  component: UploadProgressBar,
};

type Story = StoryObj<typeof UploadProgressBar>;

export const ViewInJapanese: Story = {
  args: { language: 'ja' },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};
