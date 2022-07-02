import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { BackToTopButton } from '../../components/Button/BackToTopButton';
import { Language } from '../../types/language';
import assertNever from '../../utils/assertNever';

import internalServerError from './images/internal_server_error.webp';
import notFound from './images/not_found.webp';
import serviceUnavailable from './images/service_unavailable.webp';

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

const errorType = {
  notFound: 404,
  internalServerError: 500,
  serviceUnavailable: 503,
} as const;

type ErrorType = typeof errorType[keyof typeof errorType];

const errorTitleText = {
  notFound: '404 Not Found',
  internalServerError: '500 Internal Server Error',
  serviceUnavailable: '503 Service Unavailable',
} as const;

type ErrorTitleText = typeof errorTitleText[keyof typeof errorTitleText];

const createErrorTitleText = (type: ErrorType): ErrorTitleText => {
  switch (type) {
    case errorType.notFound:
      return errorTitleText.notFound;
    case errorType.internalServerError:
      return errorTitleText.internalServerError;
    case errorType.serviceUnavailable:
      return errorTitleText.serviceUnavailable;
    default:
      return assertNever(type);
  }
};

const NotFoundImage = () => (
  <ImageWrapper>
    <Image
      src={notFound.src}
      layout="fill"
      objectFit="contain"
      alt={errorTitleText.notFound}
      priority={true}
    />
  </ImageWrapper>
);

const InternalServerErrorImage = () => (
  <ImageWrapper>
    <Image
      src={internalServerError.src}
      layout="fill"
      objectFit="contain"
      alt={errorTitleText.internalServerError}
      priority={true}
    />
  </ImageWrapper>
);

const ServiceUnavailableImage = () => (
  <ImageWrapper>
    <Image
      src={serviceUnavailable.src}
      layout="fill"
      objectFit="contain"
      alt={errorTitleText.serviceUnavailable}
      priority={true}
    />
  </ImageWrapper>
);

const createErrorImage = (type: ErrorType): JSX.Element => {
  switch (type) {
    case errorType.notFound:
      return <NotFoundImage />;
    case errorType.internalServerError:
      return <InternalServerErrorImage />;
    case errorType.serviceUnavailable:
      return <ServiceUnavailableImage />;
    default:
      return assertNever(type);
  }
};

const backToTopPageText = {
  ja: 'トップページに戻る',
  en: 'Back to Top Page',
} as const;

type BackToTopPageText =
  typeof backToTopPageText[keyof typeof backToTopPageText];

const createBackToTopPageText = (language: Language): BackToTopPageText => {
  switch (language) {
    case 'ja':
      return backToTopPageText.ja;
    case 'en':
      return backToTopPageText.en;
    default:
      return assertNever(language);
  }
};

const jaErrorMessageText = {
  notFound:
    'お探しのページは見つかりません。一時的にアクセス出来ない状態か、移動もしくは削除されてしまった可能性があります。',
  internalServerError:
    'システムエラーが発生しました。申し訳ありませんがしばらく時間がたってからお試しください。',
  serviceUnavailable:
    'メンテナンス中です。申し訳ありませんがしばらく時間がたってからお試しください。',
} as const;

type JaErrorMessageText =
  typeof jaErrorMessageText[keyof typeof jaErrorMessageText];

const enErrorMessageText = {
  notFound:
    'The page you are looking for cannot be found. It is temporarily inaccessible or has been removed.',
  internalServerError:
    'A system error has occurred. Sorry, please try again after some time has passed.',
  serviceUnavailable:
    'The system is under maintenance. Sorry, please try again after some time has passed.',
} as const;

type EnErrorMessageText =
  typeof enErrorMessageText[keyof typeof enErrorMessageText];

type ErrorMessageText = JaErrorMessageText | EnErrorMessageText;

const createErrorMessageText = (
  type: ErrorType,
  language: Language,
): ErrorMessageText => {
  switch (type) {
    case errorType.notFound:
      switch (language) {
        case 'ja':
          return jaErrorMessageText.notFound;
        case 'en':
          return enErrorMessageText.notFound;
        default:
          return assertNever(language);
      }
    case errorType.internalServerError:
      switch (language) {
        case 'ja':
          return jaErrorMessageText.internalServerError;
        case 'en':
          return enErrorMessageText.internalServerError;
        default:
          return assertNever(language);
      }
    case errorType.serviceUnavailable:
      switch (language) {
        case 'ja':
          return jaErrorMessageText.serviceUnavailable;
        case 'en':
          return enErrorMessageText.serviceUnavailable;
        default:
          return assertNever(language);
      }
    default:
      return assertNever(type);
  }
};

type Props = {
  type: ErrorType;
  language: Language;
};

export const ErrorTemplate: React.FC<Props> = ({ type, language }) => (
  <Wrapper>
    <Title>{createErrorTitleText(type)}</Title>
    {createErrorImage(type)}
    <Message>{createErrorMessageText(type, language)}</Message>
    <BackToTopButton text={createBackToTopPageText(language)} />
  </Wrapper>
);
