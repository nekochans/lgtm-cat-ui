import styled from 'styled-components';

import { errorType, type ErrorType } from '../../features';
import { useSwitchLanguage } from '../../hooks';
import { ResponsiveLayout } from '../../layouts';
import { ChangeLanguageCallback, Language } from '../../types';
import assertNever from '../../utils/assertNever';

import { BackToTopButton } from './BackToTopButton';

import type { FC, ReactNode } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
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
  catImage: ReactNode;
  changeLanguageCallback?: ChangeLanguageCallback;
};

export const ErrorTemplate: FC<Props> = ({
  type,
  language,
  catImage,
  changeLanguageCallback,
}) => {
  const {
    isLanguageMenuDisplayed,
    selectedLanguage,
    onClickEn,
    onClickJa,
    onClickLanguageButton,
    onClickOutSideMenu,
  } = useSwitchLanguage(language, changeLanguageCallback);

  return (
    <div onClick={onClickOutSideMenu} aria-hidden="true">
      <ResponsiveLayout
        language={selectedLanguage}
        onClickJa={onClickJa}
        onClickEn={onClickEn}
        isLanguageMenuDisplayed={isLanguageMenuDisplayed}
        onClickLanguageButton={onClickLanguageButton}
      >
        <Wrapper>
          <Title>{createErrorTitleText(type)}</Title>
          <ImageWrapper>{catImage}</ImageWrapper>
          <Message>{createErrorMessageText(type, selectedLanguage)}</Message>
          <BackToTopButton language={selectedLanguage} />
        </Wrapper>
      </ResponsiveLayout>
    </div>
  );
};
