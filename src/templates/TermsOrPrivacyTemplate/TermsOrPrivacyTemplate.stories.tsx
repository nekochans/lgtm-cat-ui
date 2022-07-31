import { ResponsiveLayoutContainer } from '../../containers';

import { TermsOrPrivacyTemplate, Props } from '.';

import type { ComponentStoryObj, Meta } from '@storybook/react';
import type { FC } from 'react';

const TermsOrPrivacyTemplateWithResponsiveLayout: FC<Props> = ({
  type,
  language,
  markdown,
}) => (
  <ResponsiveLayoutContainer>
    <TermsOrPrivacyTemplate
      type={type}
      language={language}
      markdown={markdown}
    />
  </ResponsiveLayoutContainer>
);

export default {
  title: 'src/templates/TermsOrPrivacyTemplate/TermsOrPrivacyTemplate.tsx',
  component: TermsOrPrivacyTemplateWithResponsiveLayout,
} as Meta<typeof TermsOrPrivacyTemplateWithResponsiveLayout>;

type Story = ComponentStoryObj<
  typeof TermsOrPrivacyTemplateWithResponsiveLayout
>;

const markdown = `
  # 🐱ねこの種類🐱
  - 🐈 マンチカン
  - 😺 スコティッシュ・フォールド
  - 😻 チンチラシルバー
  - 🐈‍⬛ ロシアンブルー
  # 🐱ねこの好きな物🐱
  - ちゅーる
  - マタタビ
  - お昼寝
`;

export const ViewPrivacyPolicyInJapanese: Story = {
  args: { type: 'privacy', language: 'ja', markdown },
};

export const ViewPrivacyPolicyInEnglish: Story = {
  args: { type: 'privacy', language: 'en', markdown },
};

export const ViewTermsOfUseInJapanese: Story = {
  args: { type: 'terms', language: 'ja', markdown },
};

export const ViewTermsOfUseInEnglish: Story = {
  args: { type: 'terms', language: 'en', markdown },
};
