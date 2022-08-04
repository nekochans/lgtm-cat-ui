import { ResponsiveLayoutContainer } from './.';

import type { ComponentStoryObj, Meta } from '@storybook/react';
import type { FC } from 'react';

export default {
  title:
    'src/containers/ResponsiveLayoutContainer/ResponsiveLayoutContainer.tsx',
  component: ResponsiveLayoutContainer,
} as Meta<typeof ResponsiveLayoutContainer>;

type Story = ComponentStoryObj<typeof ResponsiveLayoutContainer>;

const JpContents: FC = () => (
  <>
    <h1>タイトル</h1>
    <h2>サブタイトル</h2>
    <p>コンテンツ</p>
  </>
);

export const Default: Story = {
  args: {
    language: 'ja',
    children: <JpContents />,
  },
};
