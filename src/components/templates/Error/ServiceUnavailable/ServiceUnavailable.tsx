import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { Language } from '../../../../types/language';
import { BackToTopButton } from '../../../Button/BackToTopButton';
import serviceUnavailable from '../images/service_unavailable.webp';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  color: #362e2b;
  text-align: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
`;

const Message = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  color: #362e2b;
  text-align: center;
`;

type Props = {
  language: Language;
};

export const ServiceUnavailable: React.FC<Props> = ({ language }) => {
  const backToTopPageText =
    language === 'ja' ? 'トップページに戻る' : 'Back to Top Page';

  const messageText =
    language === 'ja'
      ? 'メンテナンス中です。申し訳ありませんがしばらく時間がたってからお試しください。'
      : 'The system is under maintenance. Sorry, please try again after some time has passed.';

  return (
    <Wrapper>
      <Title>503 Service Unavailable</Title>
      <ImageWrapper>
        <Image
          src={serviceUnavailable.src}
          layout="fill"
          objectFit="contain"
          alt="503 Service Unavailable"
          priority={true}
        />
      </ImageWrapper>
      <Message>{messageText}</Message>
      <BackToTopButton text={backToTopPageText} />
    </Wrapper>
  );
};
