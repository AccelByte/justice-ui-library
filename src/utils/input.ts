/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { DEFAULT_MIN_VALUE } from "../constants";

interface Params {
  key: string;
  value: string;
  min?: number | string;
  isFloat?: boolean;
}

export function isForbiddenKey({ key, value, min, isFloat }: Params): boolean {
  const isNumber = !isNaN(Number(key));
  const isDotAllowed = !!isFloat && value.split(".").length < 2 && key === ".";
  const isDashAllowed = !!min && min < DEFAULT_MIN_VALUE && key === "-";
  const isUtilityKey = key.length > 1; // for example Enter, Shift, F2, ArrowLeft

  return !(isNumber || isDotAllowed || isDashAllowed || isUtilityKey);
}
