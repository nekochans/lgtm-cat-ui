import type { ComponentStoryObj } from '@storybook/react';
import Image from 'next/image';

import internalServerError from '../../images/internal_server_error.webp';
import notFound from '../../images/not_found.webp';
import serviceUnavailable from '../../images/service_unavailable.webp';

import { ErrorTemplate } from './';

export default {
  component: ErrorTemplate,
};

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

const changeLanguageCallback: () => void = () =>
  // eslint-disable-next-line no-console
  console.log('changeLanguageCallback executed!');

export const NotFoundViewInJapanese: Story = {
  args: {
    type: 404,
    language: 'ja',
    catImage: <NotFoundImage />,
    changeLanguageCallback,
  },
};

export const NotFoundViewInEnglish: Story = {
  args: {
    type: 404,
    language: 'en',
    catImage: <NotFoundImage />,
    changeLanguageCallback,
  },
};

export const InternalServerErrorViewInJapanese: Story = {
  args: {
    type: 500,
    language: 'ja',
    catImage: <InternalServerErrorImage />,
    changeLanguageCallback,
  },
};

export const InternalServerErrorViewInEnglish: Story = {
  args: {
    type: 500,
    language: 'en',
    catImage: <InternalServerErrorImage />,
    changeLanguageCallback,
  },
};

export const ServiceUnavailableViewInJapanese: Story = {
  args: {
    type: 503,
    language: 'ja',
    catImage: <ServiceUnavailableImage />,
    changeLanguageCallback,
  },
};

export const ServiceUnavailableViewInEnglish: Story = {
  args: {
    type: 503,
    language: 'en',
    catImage: <ServiceUnavailableImage />,
    changeLanguageCallback,
  },
};
