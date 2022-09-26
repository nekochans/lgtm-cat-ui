import type { FC, ComponentProps } from 'react';
import { FaRandom } from 'react-icons/fa';
import styled from 'styled-components';

import { defaultAppUrl, type AppUrl } from '../../../constants';
import { useClipboardMarkdown, useCopySuccess } from '../../../hooks';
import { mixins } from '../../../styles';
import type { LgtmImageUrl } from '../../../types';
import { CopiedGithubMarkdownMessage } from '../../LgtmImages/CopiedGithubMarkdownMessage';
import slash from '../images/slash.png';

const StyledButton = styled.button`
  ${mixins.buttonBase};
  width: 227px;
  background: #eb7c06 url(${slash.src}) repeat 0 0/16px auto;
`;

const Text = styled.div`
  ${mixins.buttonText};
`;

const faRandomStyle = {
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '26px',
  lineHeight: '26px',
  color: '#fff',
  flex: 'none',
  order: 0,
  flexGrow: 0,
};

export type Props = ComponentProps<'button'> & {
  imageUrl: LgtmImageUrl;
  callback?: () => void;
  appUrl?: AppUrl;
};

export const CatRandomCopyButton: FC<Props> = ({
  imageUrl,
  callback,
  appUrl,
}) => {
  const { copied, onCopySuccess } = useCopySuccess(callback);

  const { imageContextRef } = useClipboardMarkdown({
    onCopySuccess,
    imageUrl,
    appUrl: appUrl ?? defaultAppUrl,
  });

  return (
    <>
      <StyledButton ref={imageContextRef}>
        <FaRandom style={faRandomStyle} />
        <Text>Cats Random Copied</Text>
      </StyledButton>
      {copied ? <CopiedGithubMarkdownMessage position="upper" /> : ''}
    </>
  );
};
