import { AcceptedTypesImageExtension } from '../../../features/lgtmImage';
import { createSuccessResult } from '../../../features/result';

import { UploadForm } from '.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/Upload/UploadForm/UploadForm.tsx',
  component: UploadForm,
} as Meta<typeof UploadForm>;

type Story = ComponentStoryObj<typeof UploadForm>;

const millisecond = 1000;

const waitSeconds = 1;

const sleep = (waitSeconds: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, waitSeconds * millisecond);
  });

const imageValidationFunc = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) => {
  await sleep(waitSeconds);

  return createSuccessResult({
    isAcceptableCatImage: true,
    notAcceptableReason: [],
  });
};

const imageValidationFuncReturnFalse = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) => {
  await sleep(waitSeconds);

  return createSuccessResult({
    isAcceptableCatImage: false,
    notAcceptableReason: [
      'An unexpected error occurred during upload.',
      'Sorry, please try again after some time has passed.',
    ],
  });
};

export const ViewInJapanese: Story = {
  args: { language: 'ja', imageValidationFunc },
};

export const ViewInJapaneseWithImageValidationFuncErrorMessages: Story = {
  args: {
    language: 'ja',
    imageValidationFunc: imageValidationFuncReturnFalse,
  },
};

export const ViewInEnglish: Story = {
  args: { language: 'en', imageValidationFunc },
};

export const ViewInEnglishWithImageValidationFuncErrorMessages: Story = {
  args: {
    language: 'en',
    imageValidationFunc: imageValidationFuncReturnFalse,
  },
};
