/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSuccessResult } from '../../../features/result';
import { AcceptedTypesImageExtension } from '../../../types/lgtmImage';
import { sleep } from '../../../utils/sleep';

import { UploadForm } from '.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/Upload/UploadForm/UploadForm.tsx',
  component: UploadForm,
} as Meta<typeof UploadForm>;

type Story = ComponentStoryObj<typeof UploadForm>;

const imageValidator = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) => {
  await sleep();

  return createSuccessResult({
    isAcceptableCatImage: true,
    notAcceptableReason: [],
  });
};

const returnFalseImageValidator = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) => {
  await sleep();

  return createSuccessResult({
    isAcceptableCatImage: false,
    notAcceptableReason: [
      'An unexpected error occurred during upload.',
      'Sorry, please try again after some time has passed.',
    ],
  });
};

const imageUploader = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) => {
  await sleep();

  return createSuccessResult({
    createdLgtmImageUrl:
      'https://lgtm-images.lgtmeow.com/2022/06/22/11/56ddad8e-08ea-4d28-bd25-7ba11c4ebdc5.webp' as const,
    displayErrorMessages: [],
  });
};

const imageUploaderWithErrors = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) => {
  await sleep();

  return createSuccessResult({
    displayErrorMessages: [
      'Sorry, but please use images that clearly show the cat.',
    ],
  });
};

export const ViewInJapanese: Story = {
  args: {
    language: 'ja',
    imageValidator,
    imageUploader,
  },
};

export const ViewInJapaneseWithReturnFalseImageValidator: Story = {
  args: {
    language: 'ja',
    imageValidator: returnFalseImageValidator,
    imageUploader,
  },
};

export const ViewInJapaneseWithImageUploaderWithErrors: Story = {
  args: {
    language: 'ja',
    imageValidator,
    imageUploader: imageUploaderWithErrors,
  },
};

export const ViewInEnglish: Story = {
  args: {
    language: 'en',
    imageValidator,
    imageUploader,
  },
};

export const ViewInEnglishWithReturnFalseImageValidator: Story = {
  args: {
    language: 'en',
    imageValidator: returnFalseImageValidator,
    imageUploader,
  },
};

export const ViewInEnglishWithImageUploaderWithErrors: Story = {
  args: {
    language: 'en',
    imageValidator,
    imageUploader: imageUploaderWithErrors,
  },
};
