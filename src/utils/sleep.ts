const millisecond = 1000;

const defaultWaitSeconds = 1;

export const sleep = (
  waitSeconds: number = defaultWaitSeconds,
): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, waitSeconds * millisecond);
  });
