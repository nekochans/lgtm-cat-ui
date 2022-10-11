import type { FC } from 'react';
import styled from 'styled-components';

import {
  CatRandomCopyButton,
  type CatRandomCopyButtonProps,
} from '../../components';

const _Wrapper = styled.div`
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
  <_Wrapper>
    <CatRandomCopyButton
      appUrl={appUrl}
      imageUrl={imageUrl}
      callback={callback}
    />
  </_Wrapper>
);
