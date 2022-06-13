import { LgtmImages } from './';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'src/components/LgtmImages/LgtmImages.tsx',
  component: LgtmImages,
} as Meta<typeof LgtmImages>;

type Story = ComponentStoryObj<typeof LgtmImages>;

const props = [
  {
    id: 1,
    url: 'https://lgtm-images.lgtmeow.com/2022/03/18/23/3086a0f3-52fc-46fa-af82-e9b7d307b155.webp',
  },
  {
    id: 2,
    url: 'https://lgtm-images.lgtmeow.com/2021/11/16/22/76de320a-b44c-4134-83f1-b874c4ff8663.webp',
  },
  {
    id: 3,
    url: 'https://lgtm-images.lgtmeow.com/2021/11/16/22/8302f89d-0fda-409d-b0db-0cef2283ed8b.webp',
  },
  {
    id: 4,
    url: 'https://lgtm-images.lgtmeow.com/2021/11/16/22/a95f34d4-edf9-4dab-b502-2db205375f3c.webp',
  },
  {
    id: 5,
    url: 'https://lgtm-images.lgtmeow.com/2022/01/21/14/b9ed8f20-16a0-47ef-8e3e-e46e872612fc.webp',
  },
  {
    id: 6,
    url: 'https://lgtm-images.lgtmeow.com/2022/03/05/00/4057d714-168d-4696-90df-dec57c8957bb.webp',
  },
  {
    id: 7,
    url: 'https://lgtm-images.lgtmeow.com/2022/04/01/23/a367f362-e26a-43e2-ad61-6c0bd6abdeb2.webp',
  },
  {
    id: 8,
    url: 'https://lgtm-images.lgtmeow.com/2022/04/16/22/d7d04f68-9c08-4345-ae1e-19db45680588.webp',
  },
  {
    id: 9,
    url: 'https://lgtm-images.lgtmeow.com/2021/03/16/00/62b7b519-9811-4e05-8c39-3c6dbab0a42d.webp',
  },
];

export const Default: Story = {
  args: {
    images: props,
  },
};
