import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 10px;
`;

const ImageWrapper = styled.div`
  align-items: center;
`;

const ImageContents = styled.img`
  object-fit: cover;
`;

type LgtmImage = { id: number; url: string };

type Props = {
  images: LgtmImage[];
};

export const LgtmImages: React.FC<Props> = ({ images }) => (
  <Wrapper>
    {images.map((image) => (
      <ImageWrapper key={image.id}>
        <ImageContents src={image.url} key={image.id} />
      </ImageWrapper>
    ))}
  </Wrapper>
);
