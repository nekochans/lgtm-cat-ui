import React from 'react';
import styled from 'styled-components';

import { Language } from '../../../types/language';
import assertNever from '../../../utils/assertNever';

const Wrapper = styled.div`
  flex: none;
  flex-grow: 0;
  order: 1;
  width: 280px;
  height: 54px;
`;

const BarWrapper = styled.div`
  width: 280px;
  height: 20px;
`;

const MainColorBar = styled.div`
  width: 92px;
  height: 18px;
  background: #f0a14e;
`;

const DefaultColorBar = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 20px;
  background: #f2ebdf;
  border: 1px solid #8e7e78;
`;

const Message = styled.p`
  width: 56px;
  height: 28px;
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #8e7e78;
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

export const UploadProgressBar: React.FC<Props> = ({ language }) => {
  const minWidth = 1;

  const maxWidth = 279;

  const incrementValue = 10;

  const interval = 200;

  const [progressLength, setProgressLength] = React.useState<number>(minWidth);

  React.useEffect(() => {
    const id = setInterval(() => {
      const updatedWidth =
        progressLength <= maxWidth ? progressLength + incrementValue : minWidth;

      setProgressLength(updatedWidth);
    }, interval);

    return () => clearInterval(id);
  }, [progressLength]);

  return (
    <Wrapper>
      <BarWrapper>
        <DefaultColorBar>
          <MainColorBar style={{ width: `${progressLength}px` }} />
        </DefaultColorBar>
      </BarWrapper>
      <Message>{messageText(language)}</Message>
    </Wrapper>
  );
};
