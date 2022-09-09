import Image from 'next/image';

import internalServerError from '../../images/internal_server_error.webp';
import notFound from '../../images/not_found.webp';
import serviceUnavailable from '../../images/service_unavailable.webp';

import { ErrorContent } from './';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/ErrorContent/ErrorContent.tsx',
  component: ErrorContent,
} as Meta<typeof ErrorContent>;

type Story = ComponentStoryObj<typeof ErrorContent>;

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

export const NotFoundViewInJapanese: Story = {
  args: {
    type: 404,
    language: 'ja',
    catImage: <NotFoundImage />,
    shouldDisplayBackToTopButton: true,
  },
};

export const NotFoundViewInEnglish: Story = {
  args: {
    type: 404,
    language: 'en',
    catImage: <NotFoundImage />,
    shouldDisplayBackToTopButton: true,
  },
};

export const InternalServerErrorViewInJapanese: Story = {
  args: {
    type: 500,
    language: 'ja',
    catImage: <InternalServerErrorImage />,
    shouldDisplayBackToTopButton: true,
  },
};

export const InternalServerErrorViewInEnglish: Story = {
  args: {
    type: 500,
    language: 'en',
    catImage: <InternalServerErrorImage />,
    shouldDisplayBackToTopButton: true,
  },
};

export const ServiceUnavailableViewInJapanese: Story = {
  args: {
    type: 503,
    language: 'ja',
    catImage: <ServiceUnavailableImage />,
    shouldDisplayBackToTopButton: true,
  },
};

export const ServiceUnavailableViewInEnglish: Story = {
  args: {
    type: 503,
    language: 'en',
    catImage: <ServiceUnavailableImage />,
    shouldDisplayBackToTopButton: true,
  },
};
