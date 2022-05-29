import React from 'react';
import styled from 'styled-components';
import '@fontsource/roboto/index.css';

const StyledFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UpperSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  padding: 10px 605px 20px;
  background: #fffcf6;
`;

const UpperSectionText = styled.div`
  width: 230px;
  height: 28px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #43281e;
  text-align: center;
  text-decoration-line: underline;
`;

const LowerSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px 644px;
  background: #f2ebdf;
`;

const LowerSectionText = styled.div`
  width: 152px;
  height: 28px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #43281e;
`;

type Props = {
  terms: {
    linkText: React.ReactNode;
  };
  privacy: {
    linkText: React.ReactNode;
  };
};

export const Footer: React.FC<Props> = ({ terms, privacy }) => (
  <StyledFooter>
    <UpperSection>
      {/* eslint-disable no-irregular-whitespace */}
      <UpperSectionText>
        {terms.linkText}　/　{privacy.linkText}
      </UpperSectionText>
    </UpperSection>
    <LowerSection>
      <LowerSectionText>Copyright (c) nekochans</LowerSectionText>
    </LowerSection>
  </StyledFooter>
);
