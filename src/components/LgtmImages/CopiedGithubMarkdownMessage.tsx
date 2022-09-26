import type { FC } from 'react';
import styled, { css } from 'styled-components';

const baseCss = css`
  position: absolute;
  left: 50%;
  padding: 3%;
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  transform: translate(-50%, 0);
`;

const DefaultWrapper = styled.div`
  ${baseCss};
  bottom: 30%;
`;

const UpperWrapper = styled.div`
  ${baseCss};
  top: 30%;
  opacity: 0.5;
`;

type Props = {
  position?: 'default' | 'upper';
};

export const CopiedGithubMarkdownMessage: FC<Props> = ({
  position = 'default',
}) => {
  const text = 'Github Markdown Copied!';

  return (
    <>
      {position === 'default' ? (
        <DefaultWrapper>{text}</DefaultWrapper>
      ) : (
        <UpperWrapper>{text}</UpperWrapper>
      )}
    </>
  );
};
