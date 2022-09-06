import { GlobalMenu } from './';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/GlobalMenu/GlobalMenu.tsx',
  component: GlobalMenu,
} as Meta<typeof GlobalMenu>;

type Story = ComponentStoryObj<typeof GlobalMenu>;

export const Default: Story = {};
