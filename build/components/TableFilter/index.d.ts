import * as React from "react";
import "./index.scss";
import { SelectOption } from "../../types";
import { SelectProps } from "../Select";
export interface TableFilterProps extends Omit<SelectProps, "onChange" | "value" | "isMulti" | "name"> {
    onFilterChange: (option: SelectOption) => void;
    currentValue: SelectOption;
    label?: string;
    tooltip?: string;
    isLarge?: boolean;
    customStyle?: React.CSSProperties;
    className?: string;
}
export declare const TableFilter: ({ currentValue, onFilterChange, label, tooltip, isLarge, customStyle, className, ...props }: TableFilterProps) => JSX.Element;
