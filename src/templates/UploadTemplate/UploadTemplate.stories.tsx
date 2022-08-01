/* eslint-disable @typescript-eslint/no-unused-vars */

import { ResponsiveLayoutContainer } from '../../containers';
import { createSuccessResult } from '../../features/result';
import { AcceptedTypesImageExtension } from '../../types/lgtmImage';
import { sleep } from '../../utils/sleep';

import { UploadTemplate, Props } from '.';

import type { ComponentStoryObj, Meta } from '@storybook/react';
import type { FC } from 'react';

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

const UploadTemplateWithResponsiveLayout: FC<Props> = ({ language }) => (
  <ResponsiveLayoutContainer language={language}>
    <UploadTemplate
      language={language}
      imageValidator={imageValidator}
      imageUploader={imageUploader}
    />
  </ResponsiveLayoutContainer>
);

export default {
  title: 'src/templates/UploadTemplate/UploadTemplate.tsx',
  component: UploadTemplateWithResponsiveLayout,
} as Meta<typeof UploadTemplateWithResponsiveLayout>;

type Story = ComponentStoryObj<typeof UploadTemplateWithResponsiveLayout>;

export const ViewInJapanese: Story = {
  args: { language: 'ja' },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};
