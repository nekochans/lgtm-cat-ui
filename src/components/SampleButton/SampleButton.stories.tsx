import { SampleButton } from './SampleButton';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/SampleButton/SampleButton.tsx',
  component: SampleButton,
} as Meta<typeof SampleButton>;

type Story = ComponentStoryObj<typeof SampleButton>;

export const NormalButton: Story = {
  args: {
    text: 'NormalButton',
    primary: false,
  },
};

export const PrimaryButton: Story = {
  args: {
    text: 'PrimaryButton',
    primary: true,
  },
};
