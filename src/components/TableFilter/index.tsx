/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import "./index.scss";
import classNames from "classnames";
import { SelectOption } from "../../types";
import { FieldLabel, Select } from "..";
import ReactTooltip from "react-tooltip";
import { renderToString } from "react-dom/server";

export interface TableFilterProps {
  onFilterChange: (option: SelectOption) => void;
  options: SelectOption[];
  currentValue: SelectOption;
  label?: string;
  tooltip?: string;
  isLarge?: boolean;
  isDisabled?: boolean;
  customStyle?: React.CSSProperties;
}

export const TableFilter = ({
  options,
  currentValue,
  onFilterChange,
  label,
  tooltip,
  isLarge,
  isDisabled,
  customStyle,
}: TableFilterProps) => {
  const dataTip = React.isValidElement(tooltip) ? renderToString(tooltip) : tooltip;
  return (
    <div className={classNames("table-filter", { isLarge })} style={customStyle}>
      {!!label && (
        <FieldLabel label={label} tooltip={dataTip} />
      )}
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
