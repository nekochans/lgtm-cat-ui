import type { FC } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import styled from 'styled-components';
import { mixins } from '../../../styles';

type Props = {
  messages: string[];
};

const _Wrapper = styled.div`
  @media (max-width: ${mixins.mediaQuerySize.default}) {
    width: 380px;
  }
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
  border: 1px solid ${mixins.colors.primary};
`;

const faExclamationTriangleStyle = {
  width: '498px',
  height: '28px',
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '31px',
  lineHeight: '28px',
  color: `${mixins.colors.primary}`,
  flex: 'none',
  order: 0,
  flexGrow: 0,
};

const _MessageText = styled.span`
  @media (max-width: ${mixins.mediaQuerySize.default}) {
    width: 380px;
  }
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
  color: ${mixins.colors.primary};
  text-align: center;
`;

export const UploadErrorMessageArea: FC<Props> = ({ messages }) => (
  <_Wrapper>
    <FaExclamationTriangle style={faExclamationTriangleStyle} />
    <_MessageText>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </_MessageText>
  </_Wrapper>
);
