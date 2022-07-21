import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 280px;
  height: 54px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const BarWrapper = styled.div`
  width: 280px;
  height: 20px;
`;

const MainColorBar = styled.div`
  width: 92px;
  height: 18px;
  background: #f0a14e;
`;

const Bar = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 20px;
  background: #f2ebdf;
  border: 1px solid #8e7e78;
`;

const Message = styled.p`
  width: 56px;
  height: 28px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  color: #8e7e78;
`;

export const UploadProgressBar: React.FC = () => (
  <Wrapper>
    <BarWrapper>
      <Bar>
        <MainColorBar />
      </Bar>
    </BarWrapper>
    <Message>送信中…</Message>
  </Wrapper>
);
