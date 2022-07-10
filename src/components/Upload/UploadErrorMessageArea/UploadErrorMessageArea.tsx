import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import styled from 'styled-components';

type Props = {
  messages: string[];
};

const StyledUploadErrorMessageArea = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-grow: 0;
  gap: 10px;
  align-items: center;
  order: 0;
  width: 498px;
  height: 154px;
  padding: 30px 0;
  background: #f7ede2;
  border: 1px solid #eb7c06;
`;

const faExclamationTriangleStyle = {
  width: '498px',
  height: '28px',
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '31px',
  lineHeight: '28px',
  color: '#eb7c06',
  flex: 'none',
  order: 0,
  flexGrow: 0,
};

const MessageText = styled.p`
  flex: none;
  flex-grow: 0;
  order: 1;
  width: 498px;
  height: 56px;
  font-family: Noto Sans JP, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: #eb7c06;
  text-align: center;
`;

export const UploadErrorMessageArea: React.FC<Props> = ({ messages }) => (
  <StyledUploadErrorMessageArea>
    <FaExclamationTriangle style={faExclamationTriangleStyle} />
    <MessageText>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </MessageText>
  </StyledUploadErrorMessageArea>
);
