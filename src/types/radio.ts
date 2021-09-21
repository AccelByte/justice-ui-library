/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { SelectOption } from "./select";
import * as React from "react";

export interface RadioOption<T = string> extends SelectOption<T> {
  helper?: string;
  customChild?: React.ReactNode;
}