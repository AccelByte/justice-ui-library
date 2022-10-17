/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { CreatableSelect as AkCreatableSelect } from "@atlaskit/select";
import { SelectOption } from "../../types";
import "./index.scss";
import { SelectProps } from "../Select";
import { DropdownIndicator } from "../Select/reactSelectComponents";

export const CreatableSelect = ({ isMulti = false, onChange, ...props }: SelectProps) => {
  return (
    <AkCreatableSelect
      className="styled-atlaskit-select"
      classNamePrefix="styled-atlaskit-select"
      components={{ DropdownIndicator }}
      isMulti={isMulti}
      onChange={onChange ? (item) => onChange(item as SelectOption) : undefined}
      {...props}
    />
  );
};
