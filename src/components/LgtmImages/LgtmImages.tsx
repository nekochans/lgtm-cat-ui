import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

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

const ImageWrapper = styled.div`
  position: relative;
  height: 300px;
  cursor: pointer;
`;

type LgtmImage = { id: number; url: string };

type Props = {
  images: LgtmImage[];
};

export const LgtmImages: React.FC<Props> = ({ images }) => (
  <Wrapper>
    {images.map((image) => (
      <ImageWrapper key={image.id}>
        <Image
          src={image.url}
          layout="fill"
          objectFit="contain"
          alt="lgtm-cat-image"
          priority={true}
        />
      </ImageWrapper>
    ))}
  </Wrapper>
);
