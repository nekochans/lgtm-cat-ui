import { SampleIcon } from './SampleIcon';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/SampleIcon/SampleIcon.tsx',
  component: SampleIcon,
} as Meta<typeof SampleIcon>;

type Story = ComponentStoryObj<typeof SampleIcon>;

export const SmallSize: Story = {
  args: {
    size: 'small',
  },
};

export const MediumSize: Story = {
  args: {
    size: 'medium',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'large',
  },
};
