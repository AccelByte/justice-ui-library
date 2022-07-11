/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import "./index.scss";

/** @deprecated Use Checkbox instead */
export interface InlineCheckboxFieldProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, "readOnly"> {
  checked: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  dataQa?: string | null;
}

/** @deprecated Use Checkbox instead */
export const InlineCheckboxField = ({ onClick, isDisabled, dataQa, ...checkboxProps }: InlineCheckboxFieldProps) => {
  return (
    <div className="checkbox-container" data-qa-id={dataQa}>
      <input {...checkboxProps} type="checkbox" disabled={isDisabled} />
      <div className="checkmark" onClick={!isDisabled ? onClick : undefined} />
    </div>
  );
};
