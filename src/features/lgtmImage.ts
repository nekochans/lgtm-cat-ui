import { AcceptedTypesImageExtension } from '../types/lgtmImage';

import { NotAllowedImageExtensionError } from './errors/NotAllowedImageExtensionError';

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
