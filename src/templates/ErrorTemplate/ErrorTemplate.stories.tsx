import Image from 'next/image';

import internalServerError from './images/internal_server_error.webp';
import notFound from './images/not_found.webp';
import serviceUnavailable from './images/service_unavailable.webp';

import { ErrorTemplate } from './index';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/templates/ErrorTemplate/ErrorTemplate.tsx',
  component: ErrorTemplate,
} as Meta<typeof ErrorTemplate>;

type Story = ComponentStoryObj<typeof ErrorTemplate>;

const NotFoundImage = () => (
  <Image
    src={notFound.src}
    layout="fill"
    objectFit="contain"
    alt="404 Not Found"
    priority={true}
  />
);

const InternalServerErrorImage = () => (
  <Image
    src={internalServerError.src}
    layout="fill"
    objectFit="contain"
    alt="500 Internal Server Error"
    priority={true}
  />
);

const ServiceUnavailableImage = () => (
  <Image
    src={serviceUnavailable.src}
    layout="fill"
    objectFit="contain"
    alt="503 Service Unavailable"
    priority={true}
  />
);

const onClickEnCallback = () =>
  // eslint-disable-next-line no-console
  console.log('onClickEnCallback executed!');

const onClickJaCallback = () =>
  // eslint-disable-next-line no-console
  console.log('onClickJaCallback executed!');

const changeLanguageCallbackFunctions = {
  onClickEnCallback,
  onClickJaCallback,
};

export const NotFoundViewInJapanese: Story = {
  args: {
    type: 404,
    language: 'ja',
    catImage: <NotFoundImage />,
    changeLanguageCallbackFunctions,
  },
};

export const NotFoundViewInEnglish: Story = {
  args: {
    type: 404,
    language: 'en',
    catImage: <NotFoundImage />,
    changeLanguageCallbackFunctions,
  },
};

export const InternalServerErrorViewInJapanese: Story = {
  args: {
    type: 500,
    language: 'ja',
    catImage: <InternalServerErrorImage />,
    changeLanguageCallbackFunctions,
  },
};

export const InternalServerErrorViewInEnglish: Story = {
  args: {
    type: 500,
    language: 'en',
    catImage: <InternalServerErrorImage />,
    changeLanguageCallbackFunctions,
  },
};

export const ServiceUnavailableViewInJapanese: Story = {
  args: {
    type: 503,
    language: 'ja',
    catImage: <ServiceUnavailableImage />,
    changeLanguageCallbackFunctions,
  },
};

export const ServiceUnavailableViewInEnglish: Story = {
  args: {
    type: 503,
    language: 'en',
    catImage: <ServiceUnavailableImage />,
    changeLanguageCallbackFunctions,
  },
};
