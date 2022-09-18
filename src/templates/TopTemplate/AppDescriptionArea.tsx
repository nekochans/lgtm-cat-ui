import styled, { css } from 'styled-components';

import { assertNever } from '../../utils/assertNever';

import type { Language } from '../../types/language';
import type { FC } from 'react';

const Wrapper = styled.div``;

const textStyle = css`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #43281e;
  text-align: center;
`;

const JaText = styled.div`
  font-family: Zen Kaku Gothic New, sans-serif;
  ${textStyle};
`;

const EnText = styled.div`
  font-family: Roboto, sans-serif;
  ${textStyle};
`;

const jaUpperSectionText = '猫のLGTM画像を共有出来るサービスです。';

const jaLowerSectionText =
  '画像をクリックするとGitHub Markdownがコピーされます。';

const enUpperSectionText = 'Cat LGTM Image Service.';

const enLowerSectionText = 'Click on the image to copy the GitHub Markdown.';

export type Props = {
  language: Language;
};

const JaAppDescriptionArea: FC = () => (
  <Wrapper>
    <JaText>{jaUpperSectionText}</JaText>
    <JaText>{jaLowerSectionText}</JaText>
  </Wrapper>
);

const EnAppDescriptionArea: FC = () => (
  <Wrapper>
    <EnText>{enUpperSectionText}</EnText>
    <EnText>{enLowerSectionText}</EnText>
  </Wrapper>
);

export const AppDescriptionArea: FC<Props> = ({ language }) => {
  switch (language) {
    case 'ja':
      return <JaAppDescriptionArea />;
    case 'en':
      return <EnAppDescriptionArea />;
    default:
      return assertNever(language);
  }
};
