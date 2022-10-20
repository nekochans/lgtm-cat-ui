import { useState, useEffect, type FC } from 'react';
import styled from 'styled-components';
import { mixins } from '../../../styles/mixins';
import type { Language } from '../../../types';
import { assertNever } from '../../../utils';

const _Wrapper = styled.div`
  flex: none;
  flex-grow: 0;
  order: 1;
  width: 280px;
  height: 54px;
`;

const _BarWrapper = styled.div`
  width: 280px;
  height: 20px;
`;

const _MainColorBar = styled.div`
  width: 92px;
  height: 18px;
  background: ${mixins.colors.primaryVariant};
`;

const _DefaultColorBar = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 20px;
  background: ${mixins.colors.sub};
  border: 1px solid ${mixins.colors.subText};
`;

const _Message = styled.p`
  width: 56px;
  height: 28px;
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: ${mixins.colors.subText};
`;

const messageText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return '送信中…';
    case 'en':
      return 'Uploading…';
    default:
      return assertNever(language);
  }
};

type Props = {
  language: Language;
};

export const UploadProgressBar: FC<Props> = ({ language }) => {
  const minWidth = 1;

  const maxWidth = 279;

  const incrementValue = 10;

  const interval = 200;

  const [progressLength, setProgressLength] = useState<number>(minWidth);

  useEffect(() => {
    const id = setInterval(() => {
      const updatedWidth =
        progressLength <= maxWidth ? progressLength + incrementValue : minWidth;

      setProgressLength(updatedWidth);
    }, interval);

    return () => clearInterval(id);
  }, [progressLength]);

  return (
    <_Wrapper>
      <_BarWrapper>
        <_DefaultColorBar>
          <_MainColorBar style={{ width: `${progressLength}px` }} />
        </_DefaultColorBar>
      </_BarWrapper>
      <_Message>{messageText(language)}</_Message>
    </_Wrapper>
  );
};
