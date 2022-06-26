import { ErrorTemplate } from './.';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/templates/ErrorTemplate/ErrorTemplate.tsx',
  component: ErrorTemplate,
} as Meta<typeof ErrorTemplate>;

type Story = ComponentStoryObj<typeof ErrorTemplate>;

export const NotFoundViewInJapanese: Story = {
  args: {
    type: 404,
    language: 'ja',
  },
};

export const NotFoundViewInEnglish: Story = {
  args: {
    type: 404,
    language: 'en',
  },
};

export const InternalServerErrorViewInJapanese: Story = {
  args: {
    type: 500,
    language: 'ja',
  },
};

export const InternalServerErrorViewInEnglish: Story = {
  args: {
    type: 500,
    language: 'en',
  },
};

export const ServiceUnavailableViewInJapanese: Story = {
  args: {
    type: 503,
    language: 'ja',
  },
};

export const ServiceUnavailableViewInEnglish: Story = {
  args: {
    type: 503,
    language: 'en',
  },
};
