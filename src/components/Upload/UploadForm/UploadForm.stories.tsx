import { AcceptedTypesImageExtension } from '../../../features/lgtmImage';
import { createSuccessResult } from '../../../features/result';

import { UploadForm } from '.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/Upload/UploadForm/UploadForm.tsx',
  component: UploadForm,
} as Meta<typeof UploadForm>;

type Story = ComponentStoryObj<typeof UploadForm>;

const imageValidationFunc = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) =>
  createSuccessResult({ isAcceptableCatImage: true, notAcceptableReason: [] });

export const ViewInJapanese: Story = {
  args: { language: 'ja', imageValidationFunc },
};

export const ViewInJapaneseWithErrorMessages: Story = {
  args: {
    language: 'ja',
    imageValidationFunc,
  },
};

export const ViewInEnglish: Story = {
  args: { language: 'en', imageValidationFunc },
};

export const ViewInEnglishWithErrorMessages: Story = {
  args: {
    language: 'en',
    imageValidationFunc,
  },
};
