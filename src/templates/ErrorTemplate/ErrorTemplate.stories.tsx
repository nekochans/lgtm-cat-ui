import type { StoryObj } from '@storybook/react';
import Image from 'next/image';

import internalServerError from '../../images/internal_server_error.webp';
import notFound from '../../images/not_found.webp';
import serviceUnavailable from '../../images/service_unavailable.webp';

import { ErrorTemplate } from './';

export default {
  component: ErrorTemplate,
};

type Story = StoryObj<typeof ErrorTemplate>;

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
const notFoundSrc = notFound.src;

const NotFoundImage = () => (
  <Image
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    src={notFoundSrc}
    style={{ objectFit: 'contain' }}
    sizes="100vw"
    fill
    alt="404 Not Found"
    priority={true}
  />
);

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
const internalServerErrorSrc = internalServerError.src;

const InternalServerErrorImage = () => (
  <Image
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    src={internalServerErrorSrc}
    style={{ objectFit: 'contain' }}
    sizes="100vw"
    fill
    alt="500 Internal Server Error"
    priority={true}
  />
);

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
const serviceUnavailableSrc = serviceUnavailable.src;

const ServiceUnavailableImage = () => (
  <Image
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    src={serviceUnavailableSrc}
    style={{ objectFit: 'contain' }}
    sizes="100vw"
    fill
    alt="503 Service Unavailable"
    priority={true}
  />
);

export const NotFoundViewInJapanese: Story = {
  args: {
    type: 404,
    language: 'ja',
    catImage: <NotFoundImage />,
    currentUrlPath: '/404',
  },
};

export const NotFoundViewInEnglish: Story = {
  args: {
    type: 404,
    language: 'en',
    catImage: <NotFoundImage />,
    currentUrlPath: '/404',
  },
};

export const InternalServerErrorViewInJapanese: Story = {
  args: {
    type: 500,
    language: 'ja',
    catImage: <InternalServerErrorImage />,
    currentUrlPath: '/500',
  },
};

export const InternalServerErrorViewInEnglish: Story = {
  args: {
    type: 500,
    language: 'en',
    catImage: <InternalServerErrorImage />,
    currentUrlPath: '/500',
  },
};

export const ServiceUnavailableViewInJapanese: Story = {
  args: {
    type: 503,
    language: 'ja',
    catImage: <ServiceUnavailableImage />,
    currentUrlPath: '/503',
  },
};

export const ServiceUnavailableViewInEnglish: Story = {
  args: {
    type: 503,
    language: 'en',
    catImage: <ServiceUnavailableImage />,
    currentUrlPath: '/503',
  },
};
