/*
 *  Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 *  This is licensed software from AccelByte Inc, for limitations
 *  and restrictions contact your company contract manager.
 */

import React from "react";
import "./index.scss";

export const FieldErrorMessage = ({ message = "" }: { message?: string }) => (
  <span className="field-error-message">
    {message}
  </span>
);