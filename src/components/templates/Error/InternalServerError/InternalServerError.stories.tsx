import { InternalServerError } from './.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/templates/InternalServerError/InternalServerError.tsx',
  component: InternalServerError,
} as Meta<typeof InternalServerError>;

type Story = ComponentStoryObj<typeof InternalServerError>;

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
