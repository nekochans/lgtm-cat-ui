import type { ComponentStoryObj, Meta } from '@storybook/react';
import { GlobalMenu } from './';

export default {
  title: 'src/components/GlobalMenu/GlobalMenu.tsx',
  component: GlobalMenu,
} as Meta<typeof GlobalMenu>;

type Story = ComponentStoryObj<typeof GlobalMenu>;

export const ViewInJapanese: Story = {
  args: { language: 'ja' },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};
