/*
 *
 *  * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import * as React from "react";
import { default as classNames } from "classnames";
import { Enum, SelectOption } from "../../types";
import { FieldErrorMessage, FieldHelperText, FieldLabel, FieldReloadMessage } from "../Form/utility";
import { Select, SelectProps } from "..";
import "./ValidSelect.scss";

export const RELOADSTATUS = Enum("LOADING", "FAILED", "SUCCESS");

export interface ValidSelectProps extends SelectProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  name?: string;
  value: SelectOption | SelectOption[] | string | null;
  reloaderStatus?: Enum<typeof RELOADSTATUS>;
  errMessage?: string;
  onChange: (option: SelectOption | SelectOption[]) => void;
  reloadMessage?: string;
  onReload?: () => void;
  optionalLabel?: string;
  isShowReloadWhileFetchFailed?: boolean;
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
  isShowReloadWhileFetchFailed,
  reloadMessage,
  onReload,
  reloaderStatus,
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
    {isShowReloadWhileFetchFailed && (
      <FieldReloadMessage message={reloadMessage} onReload={() => onReload} reloaderStatus={reloaderStatus} />
    )}
    {helperText && <FieldHelperText message={helperText} />}
  </div>
);
