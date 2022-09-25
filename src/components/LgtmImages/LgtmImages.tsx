import type { FC } from 'react';
import styled from 'styled-components';

import type { AppUrl } from '../../constants';
import type { LgtmImage } from '../../types';
import { LgtmImageContent } from './LgtmImageContent';

const Wrapper = styled.div`
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

type Props = {
  images: LgtmImage[];
  appUrl?: AppUrl;
  callback?: () => void;
};

export const LgtmImages: FC<Props> = ({ images, appUrl, callback }) => (
  <Wrapper>
    {images.map((image) => (
      <LgtmImageContent
        id={image.id}
        imageUrl={image.imageUrl}
        key={image.id}
        appUrl={appUrl}
        callback={callback}
      />
    ))}
  </Wrapper>
);
