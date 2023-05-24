import 'ress/ress.css';
import './markdown.css';
import './globals.css';
import type { Preview } from '@storybook/react';

const customViewports = {
  iPhone11ProMax: {
    name: 'iPhone 11 Pro Max',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  iPhone12: {
    name: 'iPhone 12 Pro',
    styles: {
      width: '390px',
      height: '844px',
    },
  },
  iPhone13ProMax: {
    name: 'iPhone 13 Pro Max',
    styles: {
      width: '428px',
      height: '926px',
    },
  },
  googlePixel3: {
    name: 'Google Pixel 3',
    styles: {
      width: '411px',
      height: '823px',
    },
  },
  googlePixel5: {
    name: 'Google Pixel 5',
    styles: {
      width: '393px',
      height: '851px',
    },
  },
  iPadMini: {
    name: 'iPad mini 2〜5',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  iPadMini6: {
    name: 'iPad mini 6',
    styles: {
      width: '744px',
      height: '1133px',
    },
  },
  iPadPro11: {
    name: 'iPad Pro 11',
    styles: {
      width: '834px',
      height: '1194px',
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: { viewports: customViewports },
  },
};

export default preview;
