import 'ress/ress.css';
import './markdown.css';

const customViewports = {
  iPhone12: {
    name: 'iPhone 12 Pro',
    styles: {
      width: '390px',
      height: '844px',
    },
  },
  GooglePixel: {
    name: 'Google Pixel 3',
    styles: {
      width: '411px',
      height: '823px',
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

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};
