import type { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { AppUrl, defaultAppUrl } from '../../constants';
import { useClipboardMarkdown, useCopySuccess } from '../../hooks';

import type { LgtmImage } from '../../types';
import { CopiedGithubMarkdownMessage } from './CopiedGithubMarkdownMessage';

const _Wrapper = styled.div`
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
    <_Wrapper key={id} ref={imageContextRef}>
      <Image
        src={imageUrl}
        style={{ objectFit: 'contain' }}
        sizes="100vw"
        fill
        alt="lgtm-cat-image"
        priority={true}
      />
      {copied ? <CopiedGithubMarkdownMessage /> : ''}
    </_Wrapper>
  );
};
