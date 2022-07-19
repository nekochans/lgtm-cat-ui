import { UploadForm } from '.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/Upload/UploadForm/UploadForm.tsx',
  component: UploadForm,
} as Meta<typeof UploadForm>;

type Story = ComponentStoryObj<typeof UploadForm>;

export const ViewInJapanese: Story = {
  args: { language: 'ja' },
};

export const ViewInJapaneseWithErrorMessages: Story = {
  args: {
    language: 'ja',
  },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};

export const ViewInEnglishWithErrorMessages: Story = {
  args: {
    language: 'en',
  },
};
