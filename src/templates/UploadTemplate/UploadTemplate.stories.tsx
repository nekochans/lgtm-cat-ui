import React from 'react';

import { ResponsiveLayoutContainer } from '../../containers';

import { UploadTemplate, Props } from '.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

const UploadTemplateWithResponsiveLayout: React.FC<Props> = ({ language }) => (
  <ResponsiveLayoutContainer>
    <UploadTemplate language={language} />
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
