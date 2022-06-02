import React from 'react';
import { FaBars, FaCaretDown } from 'react-icons/fa';
import styled from 'styled-components';

import { GitHubLoginButton } from '../GitHubLoginButton';

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 756px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 270px 12px 290px;
  background: #e9e2d7;
`;

const Title = styled.h1`
  position: absolute;
  top: 26.67%;
  right: 46.67%;
  bottom: 26.67%;
  left: 46.74%;
  font-family: Roboto, sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #000;
  text-align: center;
`;

const MenuGroup = styled.div`
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 10px;
  align-items: flex-start;
  order: 1;
  padding: 0;
`;

const LanguageDropDown = styled.button`
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

const LanguageText = styled.p`
  flex: none;
  flex-grow: 0;
  order: 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  color: #eb7c06;
`;

const faBarsStyle = {
  width: '27px',
  height: '28px',
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '30px',
  lineHeight: '28px',
  color: '#eb7c06',
  flex: 'none',
  order: 0,
  flexGrow: 0,
};

type Props = {
  includeLoginButton: true | false;
};

export const Header: React.FC<Props> = ({ includeLoginButton }) => (
  <StyledHeader>
    <FaBars style={faBarsStyle} />
    <Title>LGTMeow</Title>
    <MenuGroup>
      {includeLoginButton ? <GitHubLoginButton /> : ''}
      <LanguageDropDown>
        <LanguageText>
          Language <FaCaretDown />
        </LanguageText>
      </LanguageDropDown>
    </MenuGroup>
  </StyledHeader>
);
