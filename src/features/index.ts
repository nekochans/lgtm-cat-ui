export {
  createSuccessResult,
  createFailureResult,
  isSuccessResult,
  isFailureResult,
  type Result,
  SuccessResult,
  FailureResult,
} from './result';

export { errorType, type ErrorType } from './error';

export { isValidFileType, extractImageExtFromValidFileType } from './lgtmImage';

export { createPrivacyPolicyLinksFromLanguages } from './privacyPolicy';

export { createTermsOfUseLinksFromLanguages } from './termsOfUse';
