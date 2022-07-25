import React from 'react';
import styled from 'styled-components';

import { AppUrl, defaultAppUrl } from '../../../constants/url';
import useClipboardMarkdown from '../../../hooks/useClipboardMarkdown';
import { useCopySuccess } from '../../../hooks/useCopySuccess';
import { LgtmImageUrl } from '../../../types/lgtmImage';
import { CopiedGithubMarkdownMessage } from '../../LgtmImages/CopiedGithubMarkdownMessage';

const Wrapper = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  flex-grow: 0;
  gap: 24px;
  align-items: center;
  order: 1;
  width: 399px;
  height: 261px;
  padding: 0;
`;

const Title = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 244px;
  height: 28px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: #eb7c06;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  flex-grow: 0;
  gap: 4px;
  align-items: center;
  order: 1;
  width: 399px;
  height: 209px;
  padding: 0;
`;

const MainMessage = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 332px;
  height: 75px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  color: #8e7e78;
  text-align: center;
`;

const UnderSectionWrapper = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  flex-grow: 0;
  gap: 30px;
  align-items: center;
  order: 1;
  width: 399px;
  height: 130px;
  padding: 0;
`;

const DescriptionWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  order: 0;
  width: 399px;
  height: 57px;
  padding: 9px 20px 8px;
  border: 1px solid #f2ebdf;
  border-radius: 3px;
`;

const DescriptionText = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 359px;
  height: 40px;
  font-family: Roboto, sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: #8e7e78;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 20px;
  align-items: center;
  justify-content: center;
  order: 1;
  padding: 0;
`;

const CloseButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 10px;
  align-items: center;
  justify-content: center;
  order: 0;
  padding: 12px 20px;
  background: #faf9f7;
  border: 1px solid #8e7e78;
  border-radius: 4px;
`;

const CloseButtonText = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  color: #f0a14e;
`;

const MarkdownSourceCopyButton = styled.button`
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 10px;
  align-items: center;
  justify-content: center;
  order: 1;
  padding: 7px 20px;
  background: #eb7c06;
  border-radius: 4px;
`;

const MarkdownSourceCopyButtonText = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: #fff;
`;

type Props = {
  createdLgtmImageUrl: LgtmImageUrl | string;
  onClickClose?: () => void;
  appUrl?: AppUrl;
  callback?: () => void;
};

export const SuccessMessageArea: React.FC<Props> = ({
  createdLgtmImageUrl,
  onClickClose,
  appUrl,
  callback,
}) => {
  const { copied, onCopySuccess } = useCopySuccess(callback);

  const { imageContextRef } = useClipboardMarkdown({
    onCopySuccess,
    imageUrl: createdLgtmImageUrl,
    appUrl: appUrl || defaultAppUrl,
  });

  return (
    <Wrapper>
      <Title>アップロードに成功しました🐱！</Title>
      <ContentsWrapper>
        <MainMessage>
          LGTM画像を作成しているので少々お待ち下さい。
          「Markdownソースをコピー」ボタンか上の画像を
          クリックするとMarkdownソースがコピーされます。
        </MainMessage>
        <UnderSectionWrapper>
          <DescriptionWrapper>
            <DescriptionText>
              ※トップページの「New arrival
              Cats」ボタンを押下するとアップロードした画像を確認できます。
            </DescriptionText>
          </DescriptionWrapper>
          <ButtonGroup>
            <CloseButton onClick={onClickClose}>
              <CloseButtonText>閉じる</CloseButtonText>
            </CloseButton>
            <MarkdownSourceCopyButton ref={imageContextRef}>
              <MarkdownSourceCopyButtonText>
                Markdownソースをコピー
              </MarkdownSourceCopyButtonText>
            </MarkdownSourceCopyButton>
          </ButtonGroup>
        </UnderSectionWrapper>
        {copied ? <CopiedGithubMarkdownMessage /> : ''}
      </ContentsWrapper>
    </Wrapper>
  );
};
