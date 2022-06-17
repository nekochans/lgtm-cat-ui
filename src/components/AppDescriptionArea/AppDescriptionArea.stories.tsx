import { AppDescriptionArea } from './';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/AppDescriptionArea/AppDescriptionArea.tsx',
  component: AppDescriptionArea,
} as Meta<typeof AppDescriptionArea>;

type Story = ComponentStoryObj<typeof AppDescriptionArea>;

export const ViewInJapanese: Story = {
  args: { language: 'ja' },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};
