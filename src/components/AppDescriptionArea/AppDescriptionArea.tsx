import React from 'react';
import styled from 'styled-components';

import { Language } from '../../types/language';
import assertNever from '../../utils/assertNever';

const Wrapper = styled.div``;

const JaText = styled.div`
  font-family: Zen Kaku Gothic New, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #43281e;
  text-align: center;
`;

const EnText = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #43281e;
  text-align: center;
`;

const jaUpperSectionText = '猫のLGTM画像を共有出来るサービスです。';

const jaLowerSectionText =
  '画像をクリックするとGitHub Markdownがコピーされます。';

const enUpperSectionText = 'Cat LGTM Image Service.';

const enLowerSectionText = 'Click on the image to copy the GitHub Markdown.';

export type Props = {
  language: Language;
};

const JaAppDescriptionArea: React.FC = () => (
  <Wrapper>
    <JaText>{jaUpperSectionText}</JaText>
    <JaText>{jaLowerSectionText}</JaText>
  </Wrapper>
);

const EnAppDescriptionArea: React.FC = () => (
  <Wrapper>
    <EnText>{enUpperSectionText}</EnText>
    <EnText>{enLowerSectionText}</EnText>
  </Wrapper>
);

export const AppDescriptionArea: React.FC<Props> = ({ language }) => {
  switch (language) {
    case 'ja':
      return <JaAppDescriptionArea />;
    case 'en':
      return <EnAppDescriptionArea />;
    default:
      return assertNever(language);
  }
};
