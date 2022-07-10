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
    errorMessages: [
      'アップロード中に予期せぬエラーが発生しました。',
      'お手数ですが、しばらく時間が経ってからお試し下さい。',
    ],
  },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};

export const ViewInEnglishWithErrorMessages: Story = {
  args: {
    language: 'en',
    errorMessages: [
      'An unexpected error occurred during upload.',
      'Sorry, please try again after some time has passed.',
    ],
  },
};
