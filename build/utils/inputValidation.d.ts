import { CommonValidationErrorType } from 'justice-js-common-utils';
export interface GetCommonValidationErrorMessageTranslationParam {
    fieldName: string;
    minLength?: number;
    maxLength?: number;
    min?: number | string;
    max?: number | string;
    acceptedFileExtension?: string;
}
export declare const getCommonValidationErrorMessage: (commonValidation: CommonValidationErrorType | null, translationParam: GetCommonValidationErrorMessageTranslationParam, customErrorMap?: {}) => string | null;
