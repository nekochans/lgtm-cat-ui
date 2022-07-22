import React from 'react';

type Response = {
  copied: boolean;
  onCopySuccess: () => void;
};

export const useCopySuccess = (callback?: () => void): Response => {
  const [copied, setCopied] = React.useState(false);

  const onCopySuccess = React.useCallback(() => {
    if (callback) {
      callback();
    }

    const messageDisplayTime = 1000;

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, messageDisplayTime);
  }, [callback]);

  return { copied, onCopySuccess };
};
