import React from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

import { LanguageButton } from './LanguageButton';
import { LanguageMenu } from './LanguageMenu';

const Wrapper = styled.div`
  background: #e9e2d7;
`;

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  padding: 12px 20px;
  margin: 0 auto;
`;

const Title = styled.h1`
  position: absolute;
  top: 26.67%;
  bottom: 26.67%;
  left: 50%;
  font-family: Roboto, sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #000;
  text-align: center;
  transform: translateX(-50%);
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

export const Header: React.FC = () => {
  const [isMenuDisplayed, setIsMenuDisplayed] = React.useState<boolean>(false);

  const handleOnClickLanguageButton = () => {
    setIsMenuDisplayed(!isMenuDisplayed);
  };

  return (
    <>
      <Wrapper>
        <StyledHeader>
          <FaBars style={faBarsStyle} />
          <Title>LGTMeow</Title>
          <LanguageButton onClick={handleOnClickLanguageButton} />
          {isMenuDisplayed ? <LanguageMenu /> : ''}
        </StyledHeader>
      </Wrapper>
    </>
  );
};
