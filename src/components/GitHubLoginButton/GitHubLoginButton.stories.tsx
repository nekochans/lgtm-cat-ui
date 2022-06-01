import { GitHubLoginButton } from './GitHubLoginButton';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/GitHubLoginButton/GitHubLoginButton.tsx',
  component: GitHubLoginButton,
} as Meta<typeof GitHubLoginButton>;

type Story = ComponentStoryObj<typeof GitHubLoginButton>;

export const Default: Story = {};
