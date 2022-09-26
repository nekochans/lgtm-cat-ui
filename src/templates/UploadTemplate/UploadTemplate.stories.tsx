/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ComponentStoryObj } from '@storybook/react';
import Image from 'next/image';

import { createSuccessResult } from '../../features';
import type {
  AcceptedTypesImageExtension,
  ImageUploader,
  ImageValidator,
} from '../../types';
import { sleep } from '../../utils';

import cat from './images/cat.webp';

import { UploadTemplate } from '.';

const CatImage = () => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
  <Image src={cat.src} width="302px" height="302px" alt="Cat" priority={true} />
);

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

const imageUploader: ImageUploader = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension
) => {
  await sleep();

  return createSuccessResult({
    createdLgtmImageUrl:
      'https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp' as const,
    displayErrorMessages: [],
  });
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

const appUrl = 'http://localhost:2222';

export default {
  component: UploadTemplate,
};

type Story = ComponentStoryObj<typeof UploadTemplate>;

export const ViewInJapanese: Story = {
  args: {
    language: 'ja',
    imageValidator,
    imageUploader,
    catImage: <CatImage />,
    uploadCallback,
    onClickCreatedLgtmImage,
    onClickMarkdownSourceCopyButton,
    appUrl,
  },
};

export const ViewInEnglish: Story = {
  args: {
    language: 'en',
    imageValidator,
    imageUploader,
    catImage: <CatImage />,
    uploadCallback,
    onClickCreatedLgtmImage,
    onClickMarkdownSourceCopyButton,
    appUrl,
  },
};
