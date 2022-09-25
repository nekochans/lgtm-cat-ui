import type { ComponentStoryObj, Meta } from '@storybook/react';
import { CatButtonGroup } from './';

export default {
  title: 'src/components/Button/CatButtonGroup/CatButtonGroup.tsx',
  component: CatButtonGroup,
} as Meta<typeof CatButtonGroup>;

type Story = ComponentStoryObj<typeof CatButtonGroup>;

export const Default: Story = {};
