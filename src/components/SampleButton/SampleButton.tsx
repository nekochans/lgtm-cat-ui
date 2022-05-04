import React from 'react';
import styled from 'styled-components';

export type Props = {
  primary: boolean;
  text: string;
};

const PrimaryButton = styled.button`
  padding: 0.25em 1em;
  margin: 1em;
  font-size: 1em;
  color: white;
  background-color: palevioletred;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const NormalButton = styled.button`
  padding: 0.25em 1em;
  margin: 1em;
  font-size: 1em;
  background-color: white;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const SampleButton: React.FC<Props> = ({ primary, text }) => {
  if (primary) {
    return <PrimaryButton>{text}</PrimaryButton>;
  }

  return <NormalButton>{text}</NormalButton>;
};
