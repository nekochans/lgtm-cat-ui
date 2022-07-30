import { ResponsiveLayout } from './';

import type { ComponentStoryObj, Meta } from '@storybook/react';
import type { FC } from 'react';

export default {
  title: 'src/layouts/ResponsiveLayout/ResponsiveLayout.tsx',
  component: ResponsiveLayout,
} as Meta<typeof ResponsiveLayout>;

type Story = ComponentStoryObj<typeof ResponsiveLayout>;

const JpContents: FC = () => (
  <>
    <h1>タイトル</h1>
    <h2>サブタイトル</h2>
    <p>コンテンツ</p>
  </>
);

const EnContents: FC = () => (
  <>
    <h1>Title</h1>
    <h2>SubTitle</h2>
    <p>Contents</p>
  </>
);

export const ViewInJapanese: Story = {
  args: {
    language: 'ja',
    children: <JpContents />,
  },
};

export const ViewInEnglish: Story = {
  args: {
    language: 'en',
    children: <EnContents />,
  },
};
