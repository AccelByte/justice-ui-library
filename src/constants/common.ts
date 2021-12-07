/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

/*
 * regex that generates at least one uppercase, one lowercase, one alphabet, one numeric, and one symbol
 * */
export const DEFAULT_PASSWORD_AND_SECRET_REGEX =
  // tslint:disable-next-line:max-line-length
  '^(?:(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))(?!.*(.)\\1{2,})[A-Za-z0-9!~<>,;:_=?*+#."&§%°()\\|\\[\\]\\-\\$\\^\\@\\/]{8,32}$';

export const DEFAULT_MIN_VALUE = 0;
export const WILDCARD_SIGN = "*";
export const MAX_SHORT_TEXT_LENGTH = 256;
