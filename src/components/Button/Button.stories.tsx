import { Button } from './';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/Button/Button.tsx',
  component: Button,
} as Meta<typeof Button>;

type Story = ComponentStoryObj<typeof Button>;

export const Default: Story = {};
