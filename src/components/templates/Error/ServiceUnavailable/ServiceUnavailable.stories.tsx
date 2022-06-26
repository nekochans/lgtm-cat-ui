import { ServiceUnavailable } from './.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/templates/ServiceUnavailable/ServiceUnavailable.tsx',
  component: ServiceUnavailable,
} as Meta<typeof ServiceUnavailable>;

type Story = ComponentStoryObj<typeof ServiceUnavailable>;

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
