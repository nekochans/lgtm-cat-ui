import React from 'react';
import styled from 'styled-components';

import { LgtmImage } from '../../types/lgtmImage';

import { LgtmImageContent } from './LgtmImageContent';

const Wrapper = styled.div`
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  max-width: 900px;
`;

type Props = {
  images: LgtmImage[];
};

export const LgtmImages: React.FC<Props> = ({ images }) => (
  <Wrapper>
    {images.map((image) => (
      <LgtmImageContent
        id={image.id}
        imageUrl={image.imageUrl}
        key={image.id}
      />
    ))}
  </Wrapper>
);
