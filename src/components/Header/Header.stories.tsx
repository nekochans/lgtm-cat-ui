import { Header } from './';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/Header/Header.tsx',
  component: Header,
} as Meta<typeof Header>;

type Story = ComponentStoryObj<typeof Header>;

export const Default: Story = {};
