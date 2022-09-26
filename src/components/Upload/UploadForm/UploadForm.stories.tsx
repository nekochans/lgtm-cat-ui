/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ComponentStoryObj } from '@storybook/react';
import { createSuccessResult } from '../../../features';
import type {
  AcceptedTypesImageExtension,
  ImageUploader,
  ImageValidator,
} from '../../../types';
import { sleep } from '../../../utils';

import { UploadForm } from '.';

export default {
  component: UploadForm,
};

type Story = ComponentStoryObj<typeof UploadForm>;

const imageValidator: ImageValidator = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension
) => {
  await sleep();

  return createSuccessResult({
    isAcceptableCatImage: true,
    notAcceptableReason: [],
  });
};

const returnFalseImageValidator: ImageValidator = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension
) => {
  await sleep();

  return createSuccessResult({
    isAcceptableCatImage: false,
    notAcceptableReason: [
      "Sorry, please use images that do not show people's faces.",
    ],
  });
};

const throwErrorImageValidator: ImageValidator = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension
) => {
  await sleep();

  throw new Error('throwErrorImageValidator');
};

const imageUploader: ImageUploader = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension
) => {
  await sleep();

  return createSuccessResult({
    createdLgtmImageUrl:
      'https://lgtm-images.lgtmeow.com/2022/06/22/11/56ddad8e-08ea-4d28-bd25-7ba11c4ebdc5.webp' as const,
    displayErrorMessages: [],
  });
};

const imageUploaderWithErrors: ImageUploader = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension
) => {
  await sleep();

  return createSuccessResult({
    displayErrorMessages: [
      'Sorry, but please use images that clearly show the cat.',
    ],
  });
};

const throwErrorImageUploader: ImageUploader = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension
) => {
  await sleep();

  throw new Error('throwErrorImageUploader');
};

// eslint-disable-next-line no-console
const uploadCallback: () => void = () =>
  console.log('uploadCallback executed!');

const onClickCreatedLgtmImage: () => void = () =>
  // eslint-disable-next-line no-console
  console.log('onClickCreatedLgtmImage executed!');

const onClickMarkdownSourceCopyButton: () => void = () =>
  // eslint-disable-next-line no-console
  console.log('onClickMarkdownSourceCopyButton executed!');

export const ViewInJapanese: Story = {
  args: {
    language: 'ja',
    imageValidator,
    imageUploader,
    uploadCallback,
    onClickCreatedLgtmImage,
    onClickMarkdownSourceCopyButton,
  },
};

export const ViewInJapaneseWithReturnFalseImageValidator: Story = {
  args: {
    language: 'ja',
    imageValidator: returnFalseImageValidator,
    imageUploader,
    uploadCallback,
    onClickCreatedLgtmImage,
    onClickMarkdownSourceCopyButton,
  },
};

export const ViewInJapaneseWithImageUploaderWithErrors: Story = {
  args: {
    language: 'ja',
    imageValidator,
    imageUploader: imageUploaderWithErrors,
    uploadCallback,
    onClickCreatedLgtmImage,
    onClickMarkdownSourceCopyButton,
  },
};

export const ViewInJapaneseWithThrowErrorImageValidator: Story = {
  args: {
    language: 'ja',
    imageValidator: throwErrorImageValidator,
    imageUploader,
    uploadCallback,
    onClickCreatedLgtmImage,
    onClickMarkdownSourceCopyButton,
  },
};

export const ViewInJapaneseWithThrowErrorImageUploader: Story = {
  args: {
    language: 'ja',
    imageValidator,
    imageUploader: throwErrorImageUploader,
    uploadCallback,
    onClickCreatedLgtmImage,
    onClickMarkdownSourceCopyButton,
  },
};

export const ViewInEnglish: Story = {
  args: {
    language: 'en',
    imageValidator,
    imageUploader,
    uploadCallback,
    onClickCreatedLgtmImage,
    onClickMarkdownSourceCopyButton,
  },
};

export const ViewInEnglishWithReturnFalseImageValidator: Story = {
  args: {
    language: 'en',
    imageValidator: returnFalseImageValidator,
    imageUploader,
    uploadCallback,
    onClickCreatedLgtmImage,
    onClickMarkdownSourceCopyButton,
  },
};

export const ViewInEnglishWithImageUploaderWithErrors: Story = {
  args: {
    language: 'en',
    imageValidator,
    imageUploader: imageUploaderWithErrors,
    uploadCallback,
    onClickCreatedLgtmImage,
    onClickMarkdownSourceCopyButton,
  },
};

export const ViewInEnglishWithThrowErrorImageValidator: Story = {
  args: {
    language: 'en',
    imageValidator: throwErrorImageValidator,
    imageUploader,
    uploadCallback,
    onClickCreatedLgtmImage,
    onClickMarkdownSourceCopyButton,
  },
};

export const ViewInEnglishWithThrowErrorImageUploader: Story = {
  args: {
    language: 'en',
    imageValidator,
    imageUploader: throwErrorImageUploader,
    uploadCallback,
    onClickCreatedLgtmImage,
    onClickMarkdownSourceCopyButton,
  },
};
