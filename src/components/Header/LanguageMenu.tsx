import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import styled from 'styled-components';

import { Language } from '../../types/language';

const StyledLanguageMenu = styled.div`
  @media (max-width: 767px) {
    right: 0;
  }
  position: absolute;
  right: 20px;
  bottom: -70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 10px;
  align-items: flex-start;
  order: 0;
  width: 125px;
  height: 39px;
  padding: 10px 0;
  background: rgba(54, 46, 43, 0.4);
`;

const EnText = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 125px;
  height: 19px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  color: #faf9f7;
  text-align: center;
  cursor: pointer;
`;

const Separator = styled.div`
  flex: none;
  flex-grow: 0;
  order: 1;
  width: 125px;
  height: 0;
  border: 1px solid rgba(54, 46, 43, 0.4);
`;

const JaText = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 125px;
  height: 19px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  color: #faf9f7;
  text-align: center;
  cursor: pointer;
`;

export type Props = {
  language: Language;
  onClickEn: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClickJa: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const LanguageMenu: React.FC<Props> = ({
  language,
  onClickEn,
  onClickJa,
}) => (
  <StyledLanguageMenu>
    <Wrapper>
      <EnText onClick={onClickEn}>
        {language === 'en' ? <FaAngleRight /> : ''}
        English
      </EnText>
    </Wrapper>
    <Separator />
    <Wrapper>
      <JaText onClick={onClickJa}>
        {language === 'ja' ? <FaAngleRight /> : ''}
        日本語
      </JaText>
    </Wrapper>
  </StyledLanguageMenu>
);
