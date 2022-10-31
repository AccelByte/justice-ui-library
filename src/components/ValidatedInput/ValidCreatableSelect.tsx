/*
 *
 *  * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import { default as classNames } from "classnames";
import { FieldErrorMessage, FieldHelperText, FieldLabel } from "../Form/utility/FormUtility";
import { CreatableSelect, ValidSelectProps } from "..";
import "./ValidCreatableSelect.scss";

export const ValidCreatableSelect = ({
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
  helperText,
  ...props
}: ValidSelectProps) => (
  <div className={classNames("valid-select-input", className)}>
    {!!label && <FieldLabel label={label} optionalLabel={optionalLabel} isRequired={isRequired} tooltip={tooltip} />}
    <CreatableSelect
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
    />
    {isInvalid && <FieldErrorMessage message={errMessage} />}
    {helperText && <FieldHelperText message={helperText} />}
  </div>
);
