/*
 * Copyright (c) 2022. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { CommonValidationErrorType } from 'justice-js-common-utils'
import { translation } from './i18n'

export interface GetCommonValidationErrorMessageTranslationParam {
  fieldName: string
  minLength?: number
  maxLength?: number
  min?: number | string
  max?: number | string
  acceptedFileExtension?: string
}

const toTitleCase = (text: string) => text[0].toUpperCase() + text.slice(1)

export const getCommonValidationErrorMessage = (
  commonValidation: CommonValidationErrorType | null,
  translationParam: GetCommonValidationErrorMessageTranslationParam,
  customErrorMap = {}
) => {
  if (!commonValidation) {
    return null
  }
  const commonErrorMap = {
    [CommonValidationErrorType.empty]: translation('common.validationErrorMessage.empty', translationParam),
    [CommonValidationErrorType.lessThanLengthLimit]: translation('common.validationErrorMessage.lessThanLengthLimit', translationParam),
    [CommonValidationErrorType.exceedLengthLimit]: translation('common.validationErrorMessage.exceedLengthLimit', translationParam),
    [CommonValidationErrorType.invalidFormat]: translation('common.validationErrorMessage.invalidFormat', translationParam),
    [CommonValidationErrorType.lessThanMinimumValue]: translation('common.validationErrorMessage.lessThanMinimumValue', translationParam),
    [CommonValidationErrorType.exceedMaximumValue]: translation('common.validationErrorMessage.exceedMaximumValue', translationParam),
    [CommonValidationErrorType.invalidValue]: translation('common.validationErrorMessage.invalidValue', translationParam),
    [CommonValidationErrorType.containsDecimal]: translation('common.validationErrorMessage.containsDecimal', translationParam),
    [CommonValidationErrorType.invalidFileExtensions]: translation('common.validationErrorMessage.invalidFileExtensions', translationParam),
    [CommonValidationErrorType.containsForbiddenWords]: translation(
      'common.validationErrorMessage.containsForbiddenWords',
      translationParam
    ),
    [CommonValidationErrorType.alreadyUsed]: translation('common.validationErrorMessage.alreadyUsed', translationParam),
    ...customErrorMap
  }

  if (commonValidation in commonErrorMap) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    return toTitleCase(commonErrorMap[commonValidation])
  }

  return translation('common.validationErrorMessage.default')
}
