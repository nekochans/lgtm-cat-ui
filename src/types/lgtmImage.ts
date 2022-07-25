import { SuccessResult } from '../features/result';

export type LgtmImageUrl = `https://${string}`;

export type LgtmImage = { id: number; imageUrl: LgtmImageUrl };

export type AcceptedTypesImageExtension = '.png' | '.jpg' | '.jpeg';

export type ImageValidator = (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) => Promise<
  SuccessResult<{
    isAcceptableCatImage: boolean;
    notAcceptableReason: string[];
  }>
>;

export type ImageUploader = (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) => Promise<
  SuccessResult<{
    displayErrorMessages: string[];
    createdLgtmImageUrl?: LgtmImageUrl;
  }>
>;
