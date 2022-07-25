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

const imageUploadFunc = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) => {
  await sleep(waitSeconds);

  return createSuccessResult({
    createdLgtmImageUrl:
      'https://lgtm-images.lgtmeow.com/2022/06/22/11/56ddad8e-08ea-4d28-bd25-7ba11c4ebdc5.webp' as const,
    displayErrorMessages: [],
  });
};

const imageUploadFuncWithErrors = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) => {
  await sleep(waitSeconds);

  return createSuccessResult({
    displayErrorMessages: [
      'Sorry, but please use images that clearly show the cat.',
    ],
  });
};

export const ViewInJapanese: Story = {
  args: { language: 'ja', imageValidationFunc, imageUploadFunc },
};

export const ViewInJapaneseWithImageValidationFuncErrorMessages: Story = {
  args: {
    language: 'ja',
    imageValidationFunc: imageValidationFuncReturnFalse,
  },
};

export const ViewInJapaneseWithImageUploadFuncErrorMessages: Story = {
  args: {
    language: 'ja',
    imageValidationFunc,
    imageUploadFunc: imageUploadFuncWithErrors,
  },
};

export const ViewInEnglish: Story = {
  args: { language: 'en', imageValidationFunc, imageUploadFunc },
};

export const ViewInEnglishWithImageValidationFuncErrorMessages: Story = {
  args: {
    language: 'en',
    imageValidationFunc: imageValidationFuncReturnFalse,
  },
};

export const ViewInEnglishWithImageUploadFuncErrorMessages: Story = {
  args: {
    language: 'en',
    imageValidationFunc,
    imageUploadFunc: imageUploadFuncWithErrors,
  },
};
