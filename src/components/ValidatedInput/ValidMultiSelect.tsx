/*
 *
 *  * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import * as React from "react";
import { SelectOption } from "../../types";
import { FieldErrorMessage, FieldHelperText, FieldLabel } from "../Form/utility";
import { Select } from "..";

interface Props {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  errMessage?: string;
  onChange: (option: SelectOption[]) => void;
  optionalLabel?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  value?: SelectOption[] | null;
  tooltip?: string;
  helperText?: React.ReactNode;
  menuPortalTarget?: HTMLElement;
}

export const ValidMultiSelect = ({
  label,
  placeholder,
  options = [],
  onChange,
  errMessage,
  optionalLabel,
  isInvalid,
  isRequired = true,
  value,
  isDisabled,
  tooltip,
  helperText,
  menuPortalTarget,
}: Props) => (
  <>
    {!!label && <FieldLabel label={label} optionalLabel={optionalLabel} isRequired={isRequired} tooltip={tooltip} />}
    <Select
      isDisabled={isDisabled}
      options={options}
      isMulti
      isSearchable={true}
      placeholder={placeholder}
      // @ts-ignore
      onChange={onChange}
      value={value}
      menuPlacement="auto"
      menuPortalTarget={menuPortalTarget}
    />
    {isInvalid && <FieldErrorMessage message={errMessage} />}
    {helperText && <FieldHelperText message={helperText} />}
  </>
);
