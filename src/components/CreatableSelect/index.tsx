/*
 * Copyright (c) 202s AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { CreatableSelect as AkCreatableSelect } from "@atlaskit/select";
import { SelectOption } from "../../types";
import "../Select/index.scss";
import { SelectProps } from "../Select";

export const CreatableSelect = ({ isMulti = false, onChange, ...props }: SelectProps) => {
  return (
    <AkCreatableSelect
      className="styled-atlaskit-select"
      classNamePrefix={"styled-atlaskit-select"}
      isMulti={isMulti}
      onChange={onChange ? (item) => onChange(item as SelectOption) : undefined}
      {...props}
    />
  );
};
