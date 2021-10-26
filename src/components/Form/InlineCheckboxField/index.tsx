/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import "./index.scss";

export interface InlineCheckboxFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const InlineCheckboxField = ({
  checked,
  onClick,
  isDisabled,
  readOnly,
  ...checkboxProps
}: InlineCheckboxFieldProps) => {
  return (
    <div className="checkbox-container">
      <input {...checkboxProps} type="checkbox" checked={checked} disabled={isDisabled} readOnly={readOnly} />
      <div className="checkmark" onClick={!isDisabled ? onClick : undefined} />
    </div>
  );
};
