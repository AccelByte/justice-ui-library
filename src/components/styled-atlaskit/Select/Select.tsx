/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import {
  default as AkSelect,
  SelectProps as AkSelectProps,
  CreatableSelect,
  OptionType,
  OptionsType,
} from "@atlaskit/select";
import { SelectOption } from "../../../types";
import "./Select.scss";

export interface SelectProps extends Omit<AkSelectProps<SelectOption, boolean>, "onChange"> {
  onChange?: (option: SelectOption) => void;
  isCreatable?: boolean;
}

export const Select = ({ isMulti = false, isCreatable = false, onChange, ...props }: SelectProps) => {
  const defaultProps = {
    isMulti,
    className: "styled-atlaskit-select",
    classNamePrefix: "styled-atlaskit-select",
    onChange: onChange
      ? (item: OptionType | OptionsType<OptionType> | null) => onChange(item as SelectOption)
      : undefined,
    ...props,
  };
  return isCreatable ? <CreatableSelect {...defaultProps} /> : <AkSelect {...defaultProps} />;
};
