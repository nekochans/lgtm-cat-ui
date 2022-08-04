import { proxy } from 'valtio';

import type { LgtmImage } from '../../types/lgtmImage';

export type LgtmImageState = {
  lgtmImages?: LgtmImage[];
};

const lgtmImageState = proxy<LgtmImageState>({});

export const updateLgtmImages = (lgtmImages: LgtmImage[]): void => {
  lgtmImageState.lgtmImages = lgtmImages;
};

export const lgtmImageStateSelector = () => lgtmImageState;
