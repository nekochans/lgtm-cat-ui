import type { FC } from 'react';
import styled from 'styled-components';

import { defaultAppUrl, type AppUrl } from '../../../constants';
import { useClipboardMarkdown, useCopySuccess } from '../../../hooks';
import { LgtmImageUrl } from '../../../types';
import { CopiedGithubMarkdownMessage } from '../../LgtmImages/CopiedGithubMarkdownMessage';

const Wrapper = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
`;

const StyledImage = styled.img`
  @media (max-width: 767px) {
    max-width: 355px;
  }
  flex: none;
  flex-grow: 0;
  order: 0;
  width: auto;
  height: 270px;
`;

type Props = {
  imagePreviewUrl: string;
  createdLgtmImageUrl: LgtmImageUrl | string;
  appUrl?: AppUrl;
  callback?: () => void;
};

export const CreatedLgtmImage: FC<Props> = ({
  imagePreviewUrl,
  createdLgtmImageUrl,
  appUrl,
  callback,
}) => {
  const { copied, onCopySuccess } = useCopySuccess(callback);

  const { imageContextRef } = useClipboardMarkdown({
    onCopySuccess,
    imageUrl: createdLgtmImageUrl,
    appUrl: appUrl || defaultAppUrl,
  });

  return (
    <>
      <Wrapper ref={imageContextRef}>
        <StyledImage src={imagePreviewUrl} />
      </Wrapper>
      {copied ? <CopiedGithubMarkdownMessage /> : ''}
    </>
  );
};
