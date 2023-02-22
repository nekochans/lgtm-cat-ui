import type { FC } from 'react';
import styled from 'styled-components';
import { defaultAppUrl, type AppUrl } from '../../../constants';
import { useClipboardMarkdown, useCopySuccess } from '../../../hooks';
import { mixins } from '../../../styles';
import { type LgtmImageUrl } from '../../../types';
import { CopiedGithubMarkdownMessage } from '../../LgtmImages/CopiedGithubMarkdownMessage';

const _Wrapper = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
`;

const _Image = styled.img`
  @media (max-width: ${mixins.mediaQuerySize.default}) {
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
    appUrl: appUrl ?? defaultAppUrl,
  });

  return (
    <>
      <_Wrapper ref={imageContextRef}>
        <_Image src={imagePreviewUrl} />
      </_Wrapper>
      {copied ? <CopiedGithubMarkdownMessage /> : ''}
    </>
  );
};
