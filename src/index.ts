import './styles/globals.css';

export { useSwitchLanguage } from './hooks';

export * from './templates';

export type {
  Language,
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
} from './features';

export type {
  Result,
  SuccessResult,
  FailureResult,
  ErrorType,
} from './features';
