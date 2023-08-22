import type { AcceptedTypesImageExtension, LgtmImageUrl } from '../types';
import { NotAllowedImageExtensionError } from './errors';

const acceptedTypes: string[] = ['image/png', 'image/jpg', 'image/jpeg'];

export const isValidFileType = (fileType: string): boolean =>
  acceptedTypes.includes(fileType);

export const extractImageExtFromValidFileType = (
  fileType: string,
): AcceptedTypesImageExtension => {
  if (!isValidFileType(fileType)) {
    throw new NotAllowedImageExtensionError(
      `${fileType} is not an allowed image extension`,
    );
  }

  return `.${fileType.replace('image/', '')}` as AcceptedTypesImageExtension;
};

const calculateFileSize = (file: File): number => {
  const kb = 1024;
  // eslint-disable-next-line no-magic-numbers
  const mb = kb ** 2;

  // eslint-disable-next-line no-magic-numbers
  return Math.round((file.size / mb) * 100.0) / 100.0;
};

const acceptableSizeThreshold = 4;

export const acceptableImageSizeThresholdText = `${acceptableSizeThreshold}MB`;

export const isAcceptableFileSize = (file: File): boolean => {
  const size = calculateFileSize(file);

  return size <= acceptableSizeThreshold;
};

export const isLgtmImageUrl = (value: unknown): value is LgtmImageUrl => {
  if (typeof value !== 'string') {
    return false;
  }

  return value.startsWith('https://');
};
