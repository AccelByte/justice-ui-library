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
import { FieldErrorMessage, FieldLabel } from "../Form/utility";
import { Select } from "..";

export const RELOADSTATUS = Enum("LOADING", "FAILED", "SUCCESS");

export interface ValidSelectProps {
  label?: string;
  placeholder: string;
  options: SelectOption[];
  name?: string;
  value: SelectOption | SelectOption[] | string | null;
  reloaderStatus?: Enum<typeof RELOADSTATUS>;
  errMessage?: string;
  onChange: (option: SelectOption) => void;
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
  selectDataQa?: string;
  isMulti?: boolean;
  className?: string;
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
  isMulti = false,
  className,
}: ValidSelectProps) => (
  <div className={classNames("valid-select-input", className)}>
    {!!label && <FieldLabel label={label} optionalLabel={optionalLabel} isRequired={isRequired} tooltip={tooltip} />}
    <Select
      options={options}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      isDisabled={isDisabled}
      isClearable={isClearable}
      isMulti={isMulti}
      dataQa={selectDataQa}
    />
    {isInvalid && <FieldErrorMessage message={errMessage} />}
  </div>
);
