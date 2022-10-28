import type { ComponentStoryObj } from '@storybook/react';
import Image from 'next/image';

import internalServerError from '../../images/internal_server_error.webp';

import type { LgtmImage } from '../../types';
import { CatImagesFetcher } from '../../types';
import { TopTemplate } from './.';

export default {
  component: TopTemplate,
};

type Story = ComponentStoryObj<typeof TopTemplate>;

const lgtmImages: LgtmImage[] = [
  {
    id: 1,
    imageUrl:
      'https://lgtm-images.lgtmeow.com/2022/03/18/23/3086a0f3-52fc-46fa-af82-e9b7d307b155.webp',
  } as const,
  {
    id: 2,
    imageUrl:
      'https://lgtm-images.lgtmeow.com/2021/11/16/22/76de320a-b44c-4134-83f1-b874c4ff8663.webp',
  } as const,
  {
    id: 3,
    imageUrl:
      'https://lgtm-images.lgtmeow.com/2021/11/16/22/8302f89d-0fda-409d-b0db-0cef2283ed8b.webp',
  } as const,
  {
    id: 4,
    imageUrl:
      'https://lgtm-images.lgtmeow.com/2021/11/16/22/a95f34d4-edf9-4dab-b502-2db205375f3c.webp',
  } as const,
  {
    id: 5,
    imageUrl:
      'https://lgtm-images.lgtmeow.com/2022/01/21/14/b9ed8f20-16a0-47ef-8e3e-e46e872612fc.webp',
  } as const,
  {
    id: 6,
    imageUrl:
      'https://lgtm-images.lgtmeow.com/2022/03/05/00/4057d714-168d-4696-90df-dec57c8957bb.webp',
  } as const,
  {
    id: 7,
    imageUrl:
      'https://lgtm-images.lgtmeow.com/2022/04/01/23/a367f362-e26a-43e2-ad61-6c0bd6abdeb2.webp',
  } as const,
  {
    id: 8,
    imageUrl:
      'https://lgtm-images.lgtmeow.com/2022/04/16/22/d7d04f68-9c08-4345-ae1e-19db45680588.webp',
  } as const,
  {
    id: 9,
    imageUrl:
      'https://lgtm-images.lgtmeow.com/2021/03/16/00/62b7b519-9811-4e05-8c39-3c6dbab0a42d.webp',
  } as const,
];

// eslint-disable-next-line max-lines-per-function, @typescript-eslint/require-await
const randomCatImagesFetcher: CatImagesFetcher = async () => {
  const lgtmImagesList: LgtmImage[] = [
    {
      id: 11,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2021/03/16/23/5947f291-a46e-453c-a230-0d756d7174cb.webp',
    } as const,
    {
      id: 12,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2021/11/16/22/8dc0dfd0-bb86-4d03-ad1d-e541c1a5d3ec.webp',
    } as const,
    {
      id: 13,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2021/11/16/22/93646290-d9cd-41e7-a136-8942ebf6bc12.webp',
    } as const,
    {
      id: 14,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2021/11/16/22/b459c655-dabd-4423-b437-362bb8b68471.webp',
    } as const,
    {
      id: 15,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2021/11/16/22/d462b567-7427-422a-a860-762b5296ab5a.webp',
    } as const,
    {
      id: 16,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2021/11/16/22/dba3ed18-1664-4d09-b20a-0a5033b6e93f.webp',
    } as const,
    {
      id: 17,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2021/11/16/22/fe780d70-9f04-4a41-a840-cdd990fb75b3.webp',
    } as const,
    {
      id: 18,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/04/16/22/e3968a00-d190-412f-8a27-5acd54feff12.webp',
    } as const,
    {
      id: 19,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/06/22/11/56ddad8e-08ea-4d28-bd25-7ba11c4ebdc5.webp',
    } as const,
  ];

  return lgtmImagesList;
};

// eslint-disable-next-line max-lines-per-function, @typescript-eslint/require-await
const newArrivalCatImagesFetcher: CatImagesFetcher = async () => {
  const lgtmImagesList: LgtmImage[] = [
    {
      id: 21,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/07/26/13/2071d87f-3950-4ec3-94eb-3d116451329e.webp',
    } as const,
    {
      id: 22,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/07/24/18/18f8abdb-c4c5-44f7-82ca-e7550eda0780.webp',
    } as const,
    {
      id: 23,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/07/01/08/2141b748-d1ba-4d15-a9de-04d9f36e5518.webp',
    } as const,
    {
      id: 24,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/06/30/14/041e978e-787c-4b45-a0a9-55702b4f2875.webp',
    } as const,
    {
      id: 25,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/06/30/14/e1d0518c-00c5-4bb0-b5ad-fce05012c8d1.webp',
    } as const,
    {
      id: 26,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/06/23/02/4f2f6098-6167-4a99-8026-fbeafcea3012.webp',
    } as const,
    {
      id: 27,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/06/23/02/7052fd12-4007-45a7-9932-18d645397605.webp',
    } as const,
    {
      id: 28,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/06/23/02/ffbadd8d-8d9d-4eae-9bd3-af11b330d8d6.webp',
    } as const,
    {
      id: 29,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/02/24/22/ed78dd80-9bfc-456c-a474-917e5c311633.webp',
    } as const,
  ];

  return lgtmImagesList;
};

const appUrl = 'http://localhost:2222';

const clipboardMarkdownCallback: () => void = () =>
  // eslint-disable-next-line no-console
  console.log('clipboardMarkdownCallback executed!');

const fetchRandomCatImagesCallback: () => void = () =>
  // eslint-disable-next-line no-console
  console.log('fetchRandomCatImagesCallback executed!');

const fetchNewArrivalCatImagesCallback: () => void = () =>
  // eslint-disable-next-line no-console
  console.log('fetchNewArrivalCatImagesCallback executed!');

const catRandomCopyCallback: () => void = () =>
  // eslint-disable-next-line no-console
  console.log('catRandomCopyCallback executed!');

// eslint-disable-next-line @typescript-eslint/require-await
const failureRandomCatImagesFetcher: CatImagesFetcher = async () => {
  throw new Error('failureRandomCatImagesFetcher');
};

// eslint-disable-next-line @typescript-eslint/require-await
const failureNewArrivalCatImagesFetcher: CatImagesFetcher = async () => {
  throw new Error('failureNewArrivalCatImagesFetcher');
};

const InternalServerErrorImage = () => (
  <Image
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    src={internalServerError.src}
    style={{ objectFit: 'contain' }}
    sizes="100vw"
    fill
    alt="500 Internal Server Error"
    priority={true}
  />
);

export const ViewInJapanese: Story = {
  args: {
    language: 'ja',
    lgtmImages,
    randomCatImagesFetcher,
    newArrivalCatImagesFetcher,
    errorCatImage: <InternalServerErrorImage />,
    appUrl,
    clipboardMarkdownCallback,
    fetchRandomCatImagesCallback,
    fetchNewArrivalCatImagesCallback,
    catRandomCopyCallback,
  },
};

export const ViewInEnglish: Story = {
  args: {
    language: 'en',
    lgtmImages,
    randomCatImagesFetcher,
    newArrivalCatImagesFetcher,
    errorCatImage: <InternalServerErrorImage />,
    appUrl,
    clipboardMarkdownCallback,
    fetchRandomCatImagesCallback,
    fetchNewArrivalCatImagesCallback,
    catRandomCopyCallback,
  },
};

export const ViewInJapaneseError: Story = {
  args: {
    language: 'ja',
    lgtmImages,
    randomCatImagesFetcher: failureRandomCatImagesFetcher,
    newArrivalCatImagesFetcher: failureNewArrivalCatImagesFetcher,
    errorCatImage: <InternalServerErrorImage />,
    appUrl,
    clipboardMarkdownCallback,
    fetchRandomCatImagesCallback,
    fetchNewArrivalCatImagesCallback,
    catRandomCopyCallback,
  },
};

export const ViewInEnglishError: Story = {
  args: {
    language: 'en',
    lgtmImages,
    randomCatImagesFetcher: failureRandomCatImagesFetcher,
    newArrivalCatImagesFetcher: failureNewArrivalCatImagesFetcher,
    errorCatImage: <InternalServerErrorImage />,
    appUrl,
    clipboardMarkdownCallback,
    fetchRandomCatImagesCallback,
    fetchNewArrivalCatImagesCallback,
    catRandomCopyCallback,
  },
};
