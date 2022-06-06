import React from 'react';

import { LayoutContainer } from './.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/containers/LayoutContainer/LayoutContainer.tsx',
  component: LayoutContainer,
} as Meta<typeof LayoutContainer>;

type Story = ComponentStoryObj<typeof LayoutContainer>;

const JpContents: React.FC = () => (
  <>
    <h1>タイトル</h1>
    <h2>サブタイトル</h2>
    <p>コンテンツ</p>
  </>
);

export const Default: Story = {
  args: {
    useNextLink: false,
    children: <JpContents />,
  },
};

export const WithNextLink: Story = {
  args: {
    useNextLink: true,
    children: <JpContents />,
  },
};
