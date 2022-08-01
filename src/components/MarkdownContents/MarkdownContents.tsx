import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import type { FC } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 750px;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-style: normal;
  line-height: 25px;
  text-align: left;
  overflow-wrap: normal;
  list-style-position: inside;
  @media (max-width: 767px) {
    max-width: 380px;
  }
`;

export type Props = {
  markdown: string;
};

export const MarkdownContents: FC<Props> = ({ markdown }) => (
  <Wrapper>
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </Wrapper>
);
