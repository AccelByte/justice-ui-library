/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export interface SelectOption<T = string> {
  label: string;
  value: T;
  tooltip?: string;
}
