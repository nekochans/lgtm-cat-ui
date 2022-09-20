import styled from 'styled-components';

import {
  CatRandomCopyButton,
  type CatRandomCopyButtonProps,
} from '../../components';

import type { FC } from 'react';

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

type Props = CatRandomCopyButtonProps;

export const CatRandomCopyButtonWrapper: FC<Props> = ({
  appUrl,
  imageUrl,
  callback,
}) => (
  <Wrapper>
    <CatRandomCopyButton
      appUrl={appUrl}
      imageUrl={imageUrl}
      callback={callback}
    />
  </Wrapper>
);
