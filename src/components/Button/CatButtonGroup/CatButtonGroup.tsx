import type { FC } from 'react';
import styled from 'styled-components';

import { CatFetchButton } from '../CatFetchButton';
import { UploadCatButton } from '../UploadCatButton';

const _Wrapper = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  gap: 10px;
  padding: 16px 75px;
  background: #fff;
`;

const _ButtonGroup = styled.div`
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

type Props = {
  onClickFetchRandomCatButton: () => Promise<void>;
  onClickFetchNewArrivalCatButton: () => Promise<void>;
};

export const CatButtonGroup: FC<Props> = ({
  onClickFetchRandomCatButton,
  onClickFetchNewArrivalCatButton,
}) => (
  <_Wrapper>
    <_ButtonGroup>
      <UploadCatButton
        link="/upload"
        customDataAttrGtmClick="top-upload-cat-button"
      />
      <CatFetchButton type="refresh" onClick={onClickFetchRandomCatButton} />
      <CatFetchButton type="new" onClick={onClickFetchNewArrivalCatButton} />
    </_ButtonGroup>
  </_Wrapper>
);
