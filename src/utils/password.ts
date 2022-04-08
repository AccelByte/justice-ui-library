/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import randomize from "randomatic";

export const generatePassword = (pattern: string) => {
  return randomize(pattern, 32, { exclude: "'{}" });
};
