import ReactMarkdown from 'react-markdown';

import type { FC } from 'react';

export type Props = {
  markdown: string;
};

export const MarkdownContents: FC<Props> = ({ markdown }) => (
  <ReactMarkdown>{markdown}</ReactMarkdown>
);
