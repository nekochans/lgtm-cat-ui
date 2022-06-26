import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { Language } from '../../../../types/language';
import { BackToTopButton } from '../../../Button/BackToTopButton';
import internalServerError from '../images/internal_server_error.webp';

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

export const InternalServerError: React.FC<Props> = ({ language }) => {
  const backToTopPageText =
    language === 'ja' ? 'トップページに戻る' : 'Back to Top Page';

  const messageText =
    language === 'ja'
      ? 'システムエラーが発生しました。申し訳ありませんがしばらく時間がたってからお試しください。'
      : 'A system error has occurred. Sorry, please try again after some time has passed.';

  return (
    <Wrapper>
      <Title>500 Internal Server Error</Title>
      <ImageWrapper>
        <Image
          src={internalServerError.src}
          layout="fill"
          objectFit="contain"
          alt="500 Internal Server Error"
          priority={true}
        />
      </ImageWrapper>
      <Message>{messageText}</Message>
      <BackToTopButton text={backToTopPageText} />
    </Wrapper>
  );
};
