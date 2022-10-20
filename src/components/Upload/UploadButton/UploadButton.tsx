import type { FC, FormEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { mixins } from '../../../styles';
import type { Language } from '../../../types';
import { assertNever } from '../../../utils';

const buttonCss = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  background: ${mixins.colors.primary};
  border-radius: 4px;
`;

const hoverCss = css`
  &:hover {
    opacity: 0.8;
  }
`;

const _Button = styled.button`
  ${buttonCss};
  ${hoverCss};
`;

const buttonTextCss = css`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 128px;
  height: 18px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: ${mixins.colors.white};
`;

const _Text = styled.div`
  ${buttonTextCss};
  ${hoverCss};
`;

const disableCss = css`
  opacity: 0.5;
`;

const _DisableButton = styled.button`
  ${buttonCss};
  ${disableCss};
`;

const _DisableText = styled.div`
  ${buttonTextCss};
  ${disableCss};
`;

const createText = (language: Language): string => {
  switch (language) {
    case 'ja':
      return 'アップロードする';
    case 'en':
      return 'Upload';
    default:
      return assertNever(language);
  }
};

type Props = {
  language: Language;
  disabled: boolean;
  onClick: FormEventHandler;
};

export const UploadButton: FC<Props> = ({ language, disabled, onClick }) => {
  if (!disabled) {
    return (
      <_Button type="submit" disabled={disabled} onClick={onClick}>
        <_Text>{createText(language)}</_Text>
      </_Button>
    );
  }

  return (
    <_DisableButton type="submit" disabled={disabled} onClick={onClick}>
      <_DisableText>{createText(language)}</_DisableText>
    </_DisableButton>
  );
};
