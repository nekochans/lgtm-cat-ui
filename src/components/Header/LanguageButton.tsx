import type { FC, MouseEvent } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media (max-width: 767px) {
    padding: 12px 0;
  }
  box-sizing: border-box;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 10px;
  align-items: center;
  justify-content: center;
  order: 1;
  padding: 12px 20px;
  border-radius: 4px;
`;

const Text = styled.p`
  flex: none;
  flex-grow: 0;
  order: 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  color: #eb7c06;
  cursor: pointer;
`;

const faCaretDownStyle = {
  color: '#eb7c06',
  cursor: 'pointer',
};

type Props = {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
};

export const LanguageButton: FC<Props> = ({ onClick }) => (
  <Wrapper onClick={onClick}>
    <Text>Language</Text>
    <FaCaretDown style={faCaretDownStyle} />
  </Wrapper>
);
