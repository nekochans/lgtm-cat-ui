import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 24px;
  width: 399px;
  height: 261px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Title = styled.div`
  width: 244px;
  height: 28px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #eb7c06;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 4px;
  width: 399px;
  height: 209px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const MainMessage = styled.div`
  width: 332px;
  height: 75px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  color: #8e7e78;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const UnderSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 30px;
  width: 399px;
  height: 130px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const DescriptionWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 9px 20px 8px;
  gap: 10px;
  width: 399px;
  height: 57px;
  border: 1px solid #f2ebdf;
  border-radius: 3px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const DescriptionText = styled.div`
  width: 359px;
  height: 40px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 20px;
  color: #8e7e78;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const CloseButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;
  background: #faf9f7;
  border: 1px solid #8e7e78;
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const CloseButtonText = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #f0a14e;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const MarkdownSourceCopyButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 20px;
  gap: 10px;
  background: #eb7c06;
  border-radius: 4px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const MarkdownSourceCopyButtonText = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const SuccessMessageArea: React.FC = () => (
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
            ※トップページの「新着の猫ちゃんを表示」からもアップロードした画像を確認できます。
          </DescriptionText>
        </DescriptionWrapper>
        <ButtonGroup>
          <CloseButton>
            <CloseButtonText>閉じる</CloseButtonText>
          </CloseButton>
          <MarkdownSourceCopyButton>
            <MarkdownSourceCopyButtonText>
              Markdownソースをコピー
            </MarkdownSourceCopyButtonText>
          </MarkdownSourceCopyButton>
        </ButtonGroup>
      </UnderSectionWrapper>
    </ContentsWrapper>
  </Wrapper>
);
