import React from 'react';
import styled from 'styled-components';

export type Props = {
  primary: boolean;
  text: string;
};

const PrimaryButton = styled.button`
  background-color: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const NormalButton = styled.button`
  background-color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const SampleButton: React.FC<Props> = ({ primary, text }) => {
  if (primary) {
    return <PrimaryButton>{text}</PrimaryButton>;
  }

  return <NormalButton>{text}</NormalButton>;
};
