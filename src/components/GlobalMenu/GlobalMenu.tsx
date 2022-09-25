import type { FC } from 'react';
import Link from 'next/link';
import { FaTimes, FaCloudUploadAlt } from 'react-icons/fa';
import styled from 'styled-components';

import {
  createPrivacyPolicyLinksFromLanguages,
  createTermsOfUseLinksFromLanguages,
} from '../../features';

import type { Language } from '../../types';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  width: 69px;
  height: 35px;
  padding: 10px 22px 7px 0;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 22px 7px 0;
`;

const FaTimesWrapper = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 30px;
  height: 30px;
`;

const faTimesStyle = {
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '30px',
  lineHeight: '30px',
  color: '#eb7c06',
  cursor: 'pointer',
};

const LinkGroupWrapper = styled.div`
  position: absolute;
  top: 73px;
  left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 305px;
  height: 180px;
  padding: 0;
`;

const LinkWrapper = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 305px;
  height: 45px;
`;

const LinkText = styled.a`
  display: flex;
  align-items: center;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  color: #eb7c06;
  text-decoration-line: underline;
  cursor: pointer;
`;

const UnderLine = styled.div`
  box-sizing: border-box;
  background: #faf9f7;
  border-bottom: 1px solid #f2ebdf;
`;

const faCloudUploadAltStyle = {
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '16px',
  lineHeight: '30px',
  color: '#eb7c06',
  marginRight: '10px',
};

export type Props = {
  language: Language;
  onClickCloseButton: () => void;
};

// eslint-disable-next-line max-lines-per-function
export const GlobalMenu: FC<Props> = ({ language, onClickCloseButton }) => {
  const termsOfUseLinks = createTermsOfUseLinksFromLanguages(language);

  const privacyPolicyLinks = createPrivacyPolicyLinksFromLanguages(language);

  return (
    <Wrapper>
      <HeaderWrapper>
        <FaTimesWrapper onClick={onClickCloseButton}>
          <FaTimes style={faTimesStyle} />
        </FaTimesWrapper>
      </HeaderWrapper>
      <LinkGroupWrapper>
        <LinkWrapper>
          <Link href="/" prefetch={false}>
            <LinkText data-gtm-click="global-menu-top-link">TOP</LinkText>
          </Link>
          <UnderLine />
        </LinkWrapper>
        <LinkWrapper>
          <Link href="/upload" prefetch={false}>
            <LinkText data-gtm-click="global-menu-upload-cat-link">
              <FaCloudUploadAlt style={faCloudUploadAltStyle} />
              Upload new Cats
            </LinkText>
          </Link>
          <UnderLine />
        </LinkWrapper>
        <LinkWrapper>
          <Link href={termsOfUseLinks.link} prefetch={false}>
            <LinkText data-gtm-click="global-menu-terms-link">
              {termsOfUseLinks.text}
            </LinkText>
          </Link>
          <UnderLine />
        </LinkWrapper>
        <LinkWrapper>
          <Link href={privacyPolicyLinks.link} prefetch={false}>
            <LinkText data-gtm-click="global-menu-terms-link">
              {privacyPolicyLinks.text}
            </LinkText>
          </Link>
          <UnderLine />
        </LinkWrapper>
      </LinkGroupWrapper>
    </Wrapper>
  );
};
