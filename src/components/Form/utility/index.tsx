/*
 *  Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 *  This is licensed software from AccelByte Inc, for limitations
 *  and restrictions contact your company contract manager.
 */

import React from "react";
import "./index.scss";
import { addLineBreaks } from "../../Typography/typography";

export const FieldErrorMessage = ({ message = "" }: { message?: string }) => (
  <span className="field-error-message">{message}</span>
);

export const FieldLabel = ({
  label = "",
  children,
  optionalLabel,
}: {
  label?: string;
  children?: React.ReactNode;
  optionalLabel?: string;
}) => (
  <label className="field-label">
    <span>
      {label ? `${label} ` : ""}
      {optionalLabel}
      {children ? children : ""}
    </span>
  </label>
);

export const FieldCounter = ({
  value = "",
  maxLength,
  className = "",
}: {
  value: string | null;
  maxLength: number;
  className?: string;
}) => (
  <span className={`field-counter ${className}`}>
    {value && value.length ? value.length : 0}/{maxLength}
  </span>
);

export const FieldHelperText = ({ message = "" }: { message: string }) => (
  <span className="field-helper-text">{addLineBreaks(message)}</span>
);
