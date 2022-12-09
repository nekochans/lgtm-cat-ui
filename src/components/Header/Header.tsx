import { useState, type FC, MouseEvent } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import Modal from 'react-modal';
import styled from 'styled-components';
import { mixins } from '../../styles';
import { GlobalMenu } from '../GlobalMenu';
import { LanguageButton } from './LanguageButton';
import { LanguageMenu, Props as LanguageMenuProps } from './LanguageMenu';

const _Wrapper = styled.div`
  background: #e9e2d7;
`;

const _Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  padding: 12px 20px;
  margin: 0 auto;
`;

const _Title = styled.span`
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
  text-decoration: none;
  cursor: pointer;
  transform: translateX(-50%);
`;

const faBarsStyle = {
  width: '27px',
  height: '28px',
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '30px',
  lineHeight: '28px',
  color: `${mixins.colors.primary}`,
  flex: 'none',
  order: 0,
  flexGrow: 0,
  cursor: 'pointer',
};

export type Props = LanguageMenuProps & {
  isLanguageMenuDisplayed: boolean;
  onClickLanguageButton: (event: MouseEvent<HTMLDivElement>) => void;
};

const modalStyle = {
  // stylelint-disable-next-line
  overlay: {
    background: 'rgba(54, 46, 43, 0.7)',
  },
  content: {
    top: '0',
    left: '0',
    width: '365px',
    height: '100vh',
  },
};

export const Header: FC<Props> = ({
  language,
  isLanguageMenuDisplayed,
  onClickLanguageButton,
  currentUrlPath,
}) => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const openMenu = () => {
    setIsMenuOpened(true);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <>
      <Modal
        isOpen={isMenuOpened}
        ariaHideApp={false}
        style={modalStyle}
        onRequestClose={closeMenu}
      >
        <GlobalMenu language={language} onClickCloseButton={closeMenu} />
      </Modal>
      <_Wrapper>
        <_Header>
          <FaBars style={faBarsStyle} onClick={openMenu} />
          <Link href="/" prefetch={false}>
            <_Title data-gtm-click="header-app-title">LGTMeow</_Title>
          </Link>
          <LanguageButton onClick={onClickLanguageButton} />
          {isLanguageMenuDisplayed ? (
            <LanguageMenu language={language} currentUrlPath={currentUrlPath} />
          ) : (
            ''
          )}
        </_Header>
      </_Wrapper>
    </>
  );
};
