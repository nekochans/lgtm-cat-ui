export {
  createSuccessResult,
  createFailureResult,
  isSuccessResult,
  isFailureResult,
} from './result';

export type { Result, SuccessResult, FailureResult } from './result';

export { errorType, type ErrorType } from './error';

export {
  isValidFileType,
  extractImageExtFromValidFileType,
  isLgtmImageUrl,
} from './lgtmImage';

export { createPrivacyPolicyLinksFromLanguages } from './privacyPolicy';

export { createTermsOfUseLinksFromLanguages } from './termsOfUse';

export {
  NewArrivalCatImagesFetcherError,
  NotAllowedImageExtensionError,
  RandomCatImagesFetcherError,
} from './errors';
