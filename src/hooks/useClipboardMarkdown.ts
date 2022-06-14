import Clipboard from 'clipboard';
import { MutableRefObject, useEffect, useRef } from 'react';

type Request = {
  onCopySuccess: () => void;
  imageUrl: `https://${string}`;
  appUrl: `http://${string}` | `https://${string}`;
};

const useClipboardMarkdown = ({
  onCopySuccess,
  imageUrl,
  appUrl,
}: Request): { imageContextRef: MutableRefObject<null> } => {
  const ref = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const cb = new Clipboard(ref.current!, {
      text: () => `[![LGTMeow](${imageUrl})](${appUrl})`,
    });
    cb.on('success', () => {
      onCopySuccess();
    });

    return () => {
      cb.destroy();
    };
  }, [onCopySuccess, imageUrl, appUrl]);

  return { imageContextRef: ref };
};

export default useClipboardMarkdown;
