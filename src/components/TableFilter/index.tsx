/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import "./index.scss";
import classNames from "classnames";
import { SelectOption } from "../../types";
import { renderToString } from "react-dom/server";
import { FieldLabel } from "../Form/utility";
import { Select, SelectProps } from "../Select";

export interface TableFilterProps extends Omit<SelectProps, "onChange" | "value" | "isMulti" | "name"> {
  onFilterChange: (option: SelectOption) => void;
  currentValue: SelectOption;
  label?: string;
  tooltip?: string;
  isLarge?: boolean;
  customStyle?: React.CSSProperties;
  className?: string;
}

export const TableFilter = ({
  currentValue,
  onFilterChange,
  label,
  tooltip,
  isLarge,
  customStyle,
  className,
  ...props
}: TableFilterProps) => {
  const dataTip = React.isValidElement(tooltip) ? renderToString(tooltip) : tooltip;
  return (
    <div className={classNames("table-filter", className, { isLarge })} style={customStyle}>
      {!!label && <FieldLabel label={label} tooltip={dataTip} />}
      <Select isMulti={false} name="searchType" onChange={onFilterChange} value={currentValue} {...props} />
    </div>
  );
};
