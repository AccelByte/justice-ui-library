/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import "./index.scss";

export interface InlineCheckboxFieldProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, "readOnly"> {
  checked: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  dataQa?: string | null;
}

export const InlineCheckboxField = ({
  checked,
  onClick,
  isDisabled,
  readOnly,
  dataQa,
  ...checkboxProps
}: InlineCheckboxFieldProps) => {
  return (
    <div className="checkbox-container" data-qa-id={dataQa}>
      <input {...checkboxProps} type="checkbox" checked={checked} disabled={isDisabled} readOnly={readOnly} />
      <div className="checkmark" onClick={!isDisabled ? onClick : undefined} />
    </div>
  );
};
