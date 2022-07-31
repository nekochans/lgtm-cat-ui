import { FC } from 'react';
import styled from 'styled-components';

import { LibraryBooks } from '../../components/Icon/LibraryBooks';
import { MarkdownContents } from '../../components/MarkdownContents';
import { MarkdownPageTitle } from '../../components/MarkdownPageTitle';
import { createLinksFromLanguages as createPrivacyPolicyLinksFromLanguages } from '../../features/privacyPolicy';
import { createLinksFromLanguages as createTermsOfUseLinksFromLanguages } from '../../features/termsOfUse';
import { Language } from '../../types/language';
import assertNever from '../../utils/assertNever';

type TemplateType = 'terms' | 'privacy';

const createTitle = (type: TemplateType, language: Language): string => {
  switch (type) {
    case 'privacy':
      return createPrivacyPolicyLinksFromLanguages(language).text;
    case 'terms':
      return createTermsOfUseLinksFromLanguages(language).text;
    default:
      return assertNever(type);
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export type Props = {
  type: TemplateType;
  language: Language;
  markdown: string;
};

export const TermsOrPrivacyTemplate: FC<Props> = ({
  type,
  language,
  markdown,
}) => (
  <Wrapper>
    <MarkdownPageTitle text={createTitle(type, language)} />
    <LibraryBooks />
    <MarkdownContents markdown={markdown} />
  </Wrapper>
);
