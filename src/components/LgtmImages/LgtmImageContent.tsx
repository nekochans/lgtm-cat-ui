import type { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { AppUrl, defaultAppUrl } from '../../constants';
import { useClipboardMarkdown, useCopySuccess } from '../../hooks';

import type { LgtmImage } from '../../types';
import { CopiedGithubMarkdownMessage } from './CopiedGithubMarkdownMessage';

const ImageWrapper = styled.div`
  position: relative;
  height: 300px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

type Props = LgtmImage & {
  appUrl?: AppUrl;
  callback?: () => void;
};

export const LgtmImageContent: FC<Props> = ({
  id,
  imageUrl,
  appUrl,
  callback,
}) => {
  const { copied, onCopySuccess } = useCopySuccess(callback);

  const { imageContextRef } = useClipboardMarkdown({
    onCopySuccess,
    imageUrl,
    appUrl: appUrl ?? defaultAppUrl,
  });

  return (
    <ImageWrapper key={id} ref={imageContextRef}>
      <Image
        src={imageUrl}
        layout="fill"
        objectFit="contain"
        alt="lgtm-cat-image"
        priority={true}
      />
      {copied ? <CopiedGithubMarkdownMessage /> : ''}
    </ImageWrapper>
  );
};
