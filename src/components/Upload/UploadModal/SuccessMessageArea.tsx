import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 24px;
  width: 399px;
  height: 261px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Title = styled.div`
  width: 244px;
  height: 28px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #eb7c06;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const SuccessMessageArea: React.FC = () => (
  <Wrapper>
    <Title>アップロードに成功しました🐱！</Title>
  </Wrapper>
);
