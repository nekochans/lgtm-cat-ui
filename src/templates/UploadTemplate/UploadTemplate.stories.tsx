/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';

import { createSuccessResult } from '../../features';
import { AcceptedTypesImageExtension } from '../../types';
import { sleep } from '../../utils/sleep';

import cat from './images/cat.webp';

import { UploadTemplate } from '.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

const CatImage = () => (
  <Image src={cat.src} width="302px" height="302px" alt="Cat" priority={true} />
);

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

const imageUploader = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) => {
  await sleep();

  return createSuccessResult({
    createdLgtmImageUrl:
      'https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp' as const,
    displayErrorMessages: [],
  });
};

const changeLanguageCallback = () =>
  // eslint-disable-next-line no-console
  console.log('changeLanguageCallback executed!');

// eslint-disable-next-line no-console
const uploadCallback = () => console.log('uploadCallback executed!');

const onClickCreatedLgtmImage = () =>
  // eslint-disable-next-line no-console
  console.log('onClickCreatedLgtmImage executed!');

const onClickMarkdownSourceCopyButton = () =>
  // eslint-disable-next-line no-console
  console.log('onClickMarkdownSourceCopyButton executed!');

const appUrl = 'http://localhost:2222';

export default {
  title: 'src/templates/UploadTemplate/UploadTemplate.tsx',
  component: UploadTemplate,
} as Meta<typeof UploadTemplate>;

type Story = ComponentStoryObj<typeof UploadTemplate>;

export const ViewInJapanese: Story = {
  args: {
    language: 'ja',
    imageValidator,
    imageUploader,
    catImage: <CatImage />,
    changeLanguageCallback,
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
    changeLanguageCallback,
    uploadCallback,
    onClickCreatedLgtmImage,
    onClickMarkdownSourceCopyButton,
    appUrl,
  },
};
