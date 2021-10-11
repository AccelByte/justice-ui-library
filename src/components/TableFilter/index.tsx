/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import "./index.scss";
import classNames from "classnames";
import { SelectOption } from "../../types";
import { Select } from "..";

export interface TableFilterProps {
  onFilterChange: (option: SelectOption) => void;
  options: SelectOption[];
  currentValue: SelectOption;
  label?: string;
  isLarge?: boolean;
  isDisabled?: boolean;
  customStyle?: React.CSSProperties;
}

export const TableFilter = ({
  options,
  currentValue,
  onFilterChange,
  label,
  isLarge,
  isDisabled,
  customStyle,
}: TableFilterProps) => {
  return (
    <div className={classNames("table-filter", { isLarge })} style={customStyle}>
      {!!label && <div className="table-filter-label">{label}</div>}
      <Select
        options={options}
        isMulti={false}
        name="searchType"
        onChange={onFilterChange}
        value={currentValue}
        isDisabled={isDisabled}
      />
    </div>
  );
};
