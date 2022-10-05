/*
 *
 *  * Copyright (c) 2021 - 2022 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import * as React from "react";
import { default as classNames } from "classnames";
import { Enum, SelectOption } from "../../types";
import { FieldErrorMessage, FieldHelperText, FieldLabel } from "../Form/utility";
import { Select, SelectProps } from "..";
import "./ValidSelect.scss";

export const RELOADSTATUS = Enum("LOADING", "FAILED", "SUCCESS");

export interface ValidSelectProps extends SelectProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  name?: string;
  value: SelectOption | SelectOption[] | string | null;
  errMessage?: string;
  onChange: (option: SelectOption | SelectOption[]) => void;
  optionalLabel?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  dataQa?: string | null;
  isRequired?: boolean;
  isClearable?: boolean;
  tooltip?: string;
  selectDataQa?: string | null;
  selectDataQaProps?: string | null;
  isMulti?: boolean;
  className?: string;
  helperText?: React.ReactNode;
}

export const ValidSelect = ({
  label,
  placeholder,
  options = [],
  name,
  value,
  onChange,
  errMessage,
  optionalLabel,
  isInvalid,
  isDisabled = false,
  isRequired = true,
  isClearable,
  tooltip,
  selectDataQa,
  selectDataQaProps,
  isMulti = false,
  className,
  dataQa,
  helperText,
  ...props
}: ValidSelectProps) => (
  <div className={classNames("valid-select-input", className)} data-qa-id={dataQa}>
    {!!label && <FieldLabel label={label} optionalLabel={optionalLabel} isRequired={isRequired} tooltip={tooltip} />}
    <Select
      {...props}
      options={options}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      isDisabled={isDisabled}
      isClearable={isClearable}
      isMulti={isMulti}
      dataQa={selectDataQa}
      dataQaProps={selectDataQaProps}
    />
    {isInvalid && <FieldErrorMessage message={errMessage} />}
    {helperText && <FieldHelperText message={helperText} />}
  </div>
);
