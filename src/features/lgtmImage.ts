import type { AcceptedTypesImageExtension } from '../types';
import { NotAllowedImageExtensionError } from './errors';

const acceptedTypes: string[] = ['image/png', 'image/jpg', 'image/jpeg'];

export const isValidFileType = (fileType: string): boolean =>
  acceptedTypes.includes(fileType);

export const extractImageExtFromValidFileType = (
  fileType: string
): AcceptedTypesImageExtension => {
  if (!isValidFileType(fileType)) {
    throw new NotAllowedImageExtensionError(
      `${fileType} is not an allowed image extension`
    );
  }

  return `.${fileType.replace('image/', '')}` as AcceptedTypesImageExtension;
};
