import { UploadModal } from './';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/Upload/UploadModal/UploadModal.tsx',
  component: UploadModal,
} as Meta<typeof UploadModal>;

type Story = ComponentStoryObj<typeof UploadModal>;

export const ViewInJapanese: Story = {
  args: {
    language: 'ja',
    previewImage:
      'https://user-images.githubusercontent.com/11032365/168945770-df68010f-69cd-40cd-86bc-f8e1c0184589.png',
  },
};

export const ViewInEnglish: Story = {
  args: {
    language: 'en',
    previewImage:
      'https://user-images.githubusercontent.com/11032365/179384698-2dc862cb-f74c-47f3-9949-aee4572852d4.jpeg',
  },
};
