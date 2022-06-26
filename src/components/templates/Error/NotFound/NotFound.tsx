import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { Language } from '../../../../types/language';
import { BackToTopButton } from '../../../Button/BackToTopButton';
import notFound from '../images/not_found.webp';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  @media (max-width: 767px) {
    font-size: 50px;
  }
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

export const NotFound: React.FC<Props> = ({ language }) => {
  const backToTopPageText =
    language === 'ja' ? 'トップページに戻る' : 'Back to Top Page';

  const messageText =
    language === 'ja'
      ? 'お探しのページは見つかりません。一時的にアクセス出来ない状態か、移動もしくは削除されてしまった可能性があります。'
      : 'The page you are looking for cannot be found. It may have been temporarily inaccessible, moved or deleted.';

  return (
    <Wrapper>
      <Title>404 Not Found</Title>
      <ImageWrapper>
        <Image
          src={notFound.src}
          layout="fill"
          objectFit="contain"
          alt="404 Not Found"
          priority={true}
        />
      </ImageWrapper>
      <Message>{messageText}</Message>
      <BackToTopButton text={backToTopPageText} />
    </Wrapper>
  );
};
