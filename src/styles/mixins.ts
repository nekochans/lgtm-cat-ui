import { css } from 'styled-components';

const colors = {
  primary: '#EB7C06',
  primaryVariant: '#F0A14E',
  variant: '#FFD184',
  sub: '#F2EBDF',
  subVariant: '#FFFCF6',
  text: '#362E2B',
  subText: '#8E7E78',
  white: '#FFFFFF',
  background: '#FAF9F7',
};

const buttonBase = css`
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 10px;
  align-items: center;
  order: 1;
  width: fit-content;
  padding: 7px 20px;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    opacity: 0.8;
  }
`;

const buttonText = css`
  flex: none;
  flex-grow: 0;
  order: 1;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: ${colors.sub};
  &:hover {
    opacity: 0.8;
  }
`;

export const mixins = {
  buttonBase,
  buttonText,
  colors,
};
