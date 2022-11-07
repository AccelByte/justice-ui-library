/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { DEFAULT_MIN_VALUE } from "../constants";

interface Params {
  event: React.KeyboardEvent<HTMLInputElement>;
  value: string;
  min?: number | string;
  isFloat?: boolean;
  precision?: number;
}

export function isForbiddenKey({ event, value, min, isFloat = false, precision }: Params): boolean {
  const { key } = event;
  const isNumber = !isNaN(Number(key));
  const isDashAllowed = !!min && min < DEFAULT_MIN_VALUE && key === "-";
  const isUtilityKey = key.length > 1; // for example Enter, Shift, F2, ArrowLeft
  const isDotAllowed = isFloat && value.split(".").length < 2 && key === ".";
  let isIllegalPrecision = false;
  if (isFloat) {
    isIllegalPrecision =
      precision !== undefined ? value.split(".")[1]?.length >= precision && !Number.isNaN(Number(key)) : false;
    const { selectionStart } = event.currentTarget;
    if (selectionStart !== null && isIllegalPrecision && value.indexOf(".") >= selectionStart)
      isIllegalPrecision = false;
  }

  return !(isNumber || isDotAllowed || isDashAllowed || isUtilityKey) || isIllegalPrecision;
}
