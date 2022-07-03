import React from 'react';

import { ResponsiveLayoutContainer } from '../../containers';

import { UploadTemplate } from '.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

const UploadTemplateWithResponsiveLayout: React.FC = () => (
    <ResponsiveLayoutContainer>
      <UploadTemplate />
    </ResponsiveLayoutContainer>
  );

export default {
  title: 'src/templates/UploadTemplate/UploadTemplate.tsx',
  component: UploadTemplateWithResponsiveLayout,
} as Meta<typeof UploadTemplateWithResponsiveLayout>;

type Story = ComponentStoryObj<typeof UploadTemplateWithResponsiveLayout>;

export const Default: Story = {};
