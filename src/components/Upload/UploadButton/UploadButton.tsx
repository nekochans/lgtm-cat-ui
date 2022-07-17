import React from 'react';
import styled, { css } from 'styled-components';

import { Language } from '../../../types/language';
import assertNever from '../../../utils/assertNever';

const buttonCss = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  background: #eb7c06;
  border-radius: 4px;
`;

const hoverCss = css`
  &:hover {
    opacity: 0.8;
  }
`;

const Button = styled.button`
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
  color: #fff;
`;

const Text = styled.div`
  ${buttonTextCss};
  ${hoverCss};
`;

const disableCss = css`
  opacity: 0.5;
`;

const DisableButton = styled.button`
  ${buttonCss};
  ${disableCss};
`;

const DisableText = styled.div`
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
  onClick: React.FormEventHandler;
};

export const UploadButton: React.FC<Props> = ({
  language,
  disabled,
  onClick,
}) => {
  if (disabled === false) {
    return (
      <Button type="submit" disabled={disabled} onClick={onClick}>
        <Text>{createText(language)}</Text>
      </Button>
    );
  }

  return (
    <DisableButton type="submit" disabled={disabled} onClick={onClick}>
      <DisableText>{createText(language)}</DisableText>
    </DisableButton>
  );
};
