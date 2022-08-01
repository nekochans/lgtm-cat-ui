/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSuccessResult } from '../../features/result';
import { AcceptedTypesImageExtension } from '../../types/lgtmImage';
import { sleep } from '../../utils/sleep';

import { UploadTemplate } from '.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

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

export default {
  title: 'src/templates/UploadTemplate/UploadTemplate.tsx',
  component: UploadTemplate,
} as Meta<typeof UploadTemplate>;

type Story = ComponentStoryObj<typeof UploadTemplate>;

export const ViewInJapanese: Story = {
  args: { language: 'ja', imageValidator, imageUploader },
};

export const ViewInEnglish: Story = {
  args: { language: 'en', imageValidator, imageUploader },
};
