import { NotFound } from './.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/templates/NotFound/NotFound.tsx',
  component: NotFound,
} as Meta<typeof NotFound>;

type Story = ComponentStoryObj<typeof NotFound>;

export const ViewInJapanese: Story = {
  args: {
    language: 'ja',
  },
};

export const ViewInEnglish: Story = {
  args: {
    language: 'en',
  },
};
