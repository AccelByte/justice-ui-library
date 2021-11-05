/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { DEFAULT_MIN_VALUE } from "../constants";

/**
 * find the input array have "e" letter, plus, dot, comma, and dash symbol
 * @param inputArray
 * @param minimumValue
 * @param isFloat
 */

export function isForbiddenKey(key: string, minimumValue?: number | string, isFloat?: boolean): boolean {
  const isNumber = !isNaN(Number(key));
  const isDotAllowed = !!isFloat && key === ".";
  const isDashAllowed = !!minimumValue && minimumValue < DEFAULT_MIN_VALUE && key === "-";
  const isUtilityKey = key.length > 1; // for example Enter, Shift, F2, ArrowLeft

  return !(isNumber || isDotAllowed || isDashAllowed || isUtilityKey);
}
