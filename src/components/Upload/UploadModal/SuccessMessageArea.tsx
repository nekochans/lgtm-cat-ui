import type { FC } from 'react';
import styled from 'styled-components';
import { defaultAppUrl, type AppUrl } from '../../../constants';
import { useClipboardMarkdown, useCopySuccess } from '../../../hooks';
import { mixins } from '../../../styles';
import type { Language, LgtmImageUrl } from '../../../types';
import { assertNever } from '../../../utils';
import { CopiedGithubMarkdownMessage } from '../../LgtmImages/CopiedGithubMarkdownMessage';

const _Wrapper = styled.div`
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

const _Title = styled.div`
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
  color: ${mixins.colors.primary};
`;

const _ContentsWrapper = styled.div`
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

const _MainMessage = styled.div`
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
  color: ${mixins.colors.subText};
  text-align: center;
`;

const _UnderSectionWrapper = styled.div`
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

const _DescriptionWrapper = styled.div`
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
  border: 1px solid ${mixins.colors.sub};
  border-radius: 3px;
`;

const _DescriptionText = styled.div`
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
  color: ${mixins.colors.subText};
`;

const _ButtonGroup = styled.div`
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

const _CloseButton = styled.button`
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
  background: ${mixins.colors.background};
  border: 1px solid ${mixins.colors.subText};
  border-radius: 4px;
`;

const _CloseButtonText = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  color: ${mixins.colors.primaryVariant};
`;

const _MarkdownSourceCopyButton = styled.button`
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 10px;
  align-items: center;
  justify-content: center;
  order: 1;
  padding: 7px 20px;
  background: ${mixins.colors.primary};
  border-radius: 4px;
`;

const _MarkdownSourceCopyButtonText = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: ${mixins.colors.white};
`;

const titleText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return 'アップロードが成功しました🐱！';
    case 'en':
      return 'Upload succeeded🐱!';
    default:
      return assertNever(language);
  }
};

const closeButtonText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return '閉じる';
    case 'en':
      return 'close';
    default:
      return assertNever(language);
  }
};

const markdownSourceCopyButtonText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return 'Markdownソースをコピー';
    case 'en':
      return 'Copy Markdown source';
    default:
      return assertNever(language);
  }
};

const mainMessageText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return `LGTM画像を作成しているので少々お待ち下さい。「${markdownSourceCopyButtonText(
        language
      )}」ボタンか上の画像をクリックするとMarkdownソースがコピーされます。`;
    case 'en':
      return `Please wait a moment while we create the LGTM image. Click on the "${markdownSourceCopyButtonText(
        language
      )}" button or the image above to copy the Markdown source.`;
    default:
      return assertNever(language);
  }
};

const descriptionText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return '※トップページの「New arrival Cats」ボタンを押下するとアップロードした画像を確認できます。';
    case 'en':
      return '※Click the "New arrival Cats" button on the top page to see the uploaded images.';
    default:
      return assertNever(language);
  }
};

type Props = {
  language: Language;
  createdLgtmImageUrl: LgtmImageUrl | string;
  onClickClose?: () => void;
  appUrl?: AppUrl;
  callback?: () => void;
};

export const SuccessMessageArea: FC<Props> = ({
  language,
  createdLgtmImageUrl,
  onClickClose,
  appUrl,
  callback,
}) => {
  const { copied, onCopySuccess } = useCopySuccess(callback);

  const { imageContextRef } = useClipboardMarkdown({
    onCopySuccess,
    imageUrl: createdLgtmImageUrl,
    appUrl: appUrl ?? defaultAppUrl,
  });

  return (
    <_Wrapper>
      <_Title>{titleText(language)}</_Title>
      <_ContentsWrapper>
        <_MainMessage>{mainMessageText(language)}</_MainMessage>
        <_UnderSectionWrapper>
          <_DescriptionWrapper>
            <_DescriptionText>{descriptionText(language)}</_DescriptionText>
          </_DescriptionWrapper>
          <_ButtonGroup>
            <_CloseButton onClick={onClickClose}>
              <_CloseButtonText>{closeButtonText(language)}</_CloseButtonText>
            </_CloseButton>
            <_MarkdownSourceCopyButton ref={imageContextRef}>
              <_MarkdownSourceCopyButtonText>
                {markdownSourceCopyButtonText(language)}
              </_MarkdownSourceCopyButtonText>
            </_MarkdownSourceCopyButton>
          </_ButtonGroup>
        </_UnderSectionWrapper>
        {copied ? <CopiedGithubMarkdownMessage /> : ''}
      </_ContentsWrapper>
    </_Wrapper>
  );
};
