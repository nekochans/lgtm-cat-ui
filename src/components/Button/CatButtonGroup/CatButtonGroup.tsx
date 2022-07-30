import styled from 'styled-components';

import { CatFetchButton } from '../CatFetchButton';
import { UploadCatButton } from '../UploadCatButton';

import type { FC } from 'react';

const Wrapper = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  gap: 10px;
  padding: 16px 75px;
  background: #fff;
`;

const ButtonGroup = styled.div`
  @media (max-width: 767px) {
    flex: none;
    flex-direction: column;
    flex-grow: 0;
    order: 0;
  }
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const CatButtonGroup: FC = () => (
  <Wrapper>
    <ButtonGroup>
      <UploadCatButton link="/upload" />
      <CatFetchButton type="refresh" />
      <CatFetchButton type="new" />
    </ButtonGroup>
  </Wrapper>
);
