import React from 'react';
import styled from 'styled-components';

import { AppUrl, defaultAppUrl } from '../../../constants/url';
import useClipboardMarkdown from '../../../hooks/useClipboardMarkdown';
import { useCopySuccess } from '../../../hooks/useCopySuccess';
import { LgtmImageUrl } from '../../../types/lgtmImage';
import { CopiedGithubMarkdownMessage } from '../../LgtmImages/CopiedGithubMarkdownMessage';

const Wrapper = styled.div`
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const StyledImage = styled.img`
  @media (max-width: 767px) {
    max-width: 355px;
  }
  width: auto;
  height: 270px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

type Props = {
  imagePreviewUrl: string;
  createdLgtmImageUrl: LgtmImageUrl;
  appUrl?: AppUrl;
  callback?: () => void;
};

export const CreatedLgtmImage: React.FC<Props> = ({
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
