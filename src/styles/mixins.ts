import { css } from 'styled-components';

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
  color: #f2ebdf;
  &:hover {
    opacity: 0.8;
  }
`;

export const mixins = {
  buttonBase,
  buttonText,
};
