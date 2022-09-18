export { useSwitchLanguage } from './hooks';

export * from './templates';

export type {
  Language,
  ChangeLanguageCallback,
  LgtmImageUrl,
  LgtmImage,
  AcceptedTypesImageExtension,
  ImageValidator,
  ImageUploader,
  CatImagesFetcher,
} from './types';

export {
  createSuccessResult,
  createFailureResult,
  isSuccessResult,
  isFailureResult,
  errorType,
  type Result,
  SuccessResult,
  FailureResult,
  ErrorType,
} from './features';
