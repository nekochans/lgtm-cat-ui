/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';
import { UploadTemplate } from '.';
import { createSuccessResult } from '../../features';
import type {
  AcceptedTypesImageExtension,
  ImageUploader,
  ImageValidator,
} from '../../types';
import { sleep } from '../../utils';
import cat from './images/cat.webp';

const CatImage = () => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
  <Image src={cat.src} alt="Cat" width={302} height={302} priority={true} />
);

const imageValidator: ImageValidator = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) => {
  await sleep();

  return createSuccessResult({
    isAcceptableCatImage: true,
    notAcceptableReason: [],
  });
};

const imageUploader: ImageUploader = async (
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

const appUrl = 'http://localhost:2222';

const meta: Meta<typeof UploadTemplate> = {
  component: UploadTemplate,
  argTypes: {
    uploadCallback: { action: 'uploadCallback executed' },
    onClickCreatedLgtmImage: { action: 'CreatedLgtmImage Clicked' },
    onClickMarkdownSourceCopyButton: {
      action: 'MarkdownSourceCopyButton Clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof UploadTemplate>;

export const ViewInJapanese: Story = {
  args: {
    language: 'ja',
    imageValidator,
    imageUploader,
    catImage: <CatImage />,
    appUrl,
  },
};

export const ViewInEnglish: Story = {
  args: {
    language: 'en',
    imageValidator,
    imageUploader,
    catImage: <CatImage />,
    appUrl,
  },
};
