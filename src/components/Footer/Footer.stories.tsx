import type { ComponentStoryObj, Meta } from '@storybook/react';
import { Footer } from './';

export default {
  title: 'src/components/Footer/Footer.tsx',
  component: Footer,
} as Meta<typeof Footer>;

type Story = ComponentStoryObj<typeof Footer>;

export const ViewInJapanese: Story = {
  args: { language: 'ja' },
};

export const ViewInEnglish: Story = {
  args: { language: 'en' },
};
