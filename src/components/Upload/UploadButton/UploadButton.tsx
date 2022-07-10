import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  background: #eb7c06;
  border-radius: 4px;
`;

const Text = styled.div`
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

export const UploadButton: React.FC = () => (
  <Button type="submit">
    <Text>アップロードする</Text>
  </Button>
);
