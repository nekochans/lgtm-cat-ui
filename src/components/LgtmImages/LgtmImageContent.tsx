import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import useClipboardMarkdown from '../../hooks/useClipboardMarkdown';
import { LgtmImage } from '../../types/lgtmImage';

import { CopiedGithubMarkdownMessage } from './CopiedGithubMarkdownMessage';

const ImageWrapper = styled.div`
  position: relative;
  height: 300px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

type Props = LgtmImage;

export const LgtmImageContent: React.FC<Props> = ({ id, url }) => {
  const [copied, setCopied] = React.useState(false);

  const onCopySuccess = React.useCallback(() => {
    const messageDisplayTime = 1000;

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, messageDisplayTime);
  }, []);

  const { imageContextRef } = useClipboardMarkdown({
    onCopySuccess,
    imageUrl: url,
    appUrl: 'https://lgtmeow.com',
  });

  return (
    <ImageWrapper key={id} ref={imageContextRef}>
      <Image
        src={url}
        layout="fill"
        objectFit="contain"
        alt="lgtm-cat-image"
        priority={true}
      />
      {copied ? <CopiedGithubMarkdownMessage /> : ''}
    </ImageWrapper>
  );
};
