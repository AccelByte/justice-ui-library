/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { default as AkSelect, SelectProps as AkSelectProps } from "@atlaskit/select";
import { SelectOption } from "../../../types";
import "./Select.scss";

export interface SelectProps extends Omit<AkSelectProps<SelectOption, boolean>, "onChange"> {
  onChange?: (option: SelectOption) => void;
}

export const Select = ({ isMulti = false, onChange, ...props }: SelectProps) => {
  return (
    <AkSelect
      className="styled-atlaskit-select"
      classNamePrefix={"styled-atlaskit-select"}
      isMulti={isMulti}
      onChange={onChange ? (item) => onChange(item as SelectOption) : undefined}
      {...props}
    />
  );
};
