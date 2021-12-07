/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import flatten from "flat";
import i18next, { Resource, StringMap, TOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import config from "./config.json";
import loadedLanguages from "./loadLanguages";

const languageLocalStorageKey = "i18nextLng";
const availableLanguageCodes = config.languageCodes;
const translationResource: Resource = availableLanguageCodes.reduce((resources: Resource, languageCode: string) => {
  resources[languageCode] = {
    // Loading unflattened resource
    translation: flatten.unflatten(loadedLanguages[languageCode]),
  };
  return resources;
}, {});

function getLocalStorageLanguage(): string {
  const currentLanguageCode = localStorage.getItem(languageLocalStorageKey);
  if (currentLanguageCode && availableLanguageCodes.includes(currentLanguageCode)) {
    return currentLanguageCode;
  }
  return config.defaultLanguage;
}

export const i18nInstance = i18next.use(initReactI18next).createInstance(
  {
    lng: getLocalStorageLanguage(),
    fallbackLng: config.fallbackLanguage,
    preload: availableLanguageCodes,
    resources: translationResource,
    initImmediate: false,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
); // Do not remove the callback. It will break the i18n

export function translation(key: string, options?: TOptions<StringMap> | string) {
  return i18nInstance.t(key, options);
}