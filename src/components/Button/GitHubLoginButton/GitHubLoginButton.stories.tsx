import type { ComponentStoryObj } from '@storybook/react';
import { GitHubLoginButton } from './GitHubLoginButton';

export default {
  component: GitHubLoginButton,
};

type Story = ComponentStoryObj<typeof GitHubLoginButton>;

export const Default: Story = {};
