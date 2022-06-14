import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { LgtmImage } from '../../types/lgtmImage';

const ImageWrapper = styled.div`
  position: relative;
  height: 300px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

type Props = LgtmImage;

export const LgtmImageContent: React.FC<Props> = ({ id, url }) => (
  <ImageWrapper key={id}>
    <Image
      src={url}
      layout="fill"
      objectFit="contain"
      alt="lgtm-cat-image"
      priority={true}
    />
  </ImageWrapper>
);
