import * as React from "react";
import "./index.scss";
import { SelectOption } from "../../types";
export interface TableFilterProps {
    onFilterChange: (option: SelectOption) => void;
    options: SelectOption[];
    currentValue: SelectOption;
    label?: string;
    isLarge?: boolean;
    isDisabled?: boolean;
    customStyle?: React.CSSProperties;
}
export declare const TableFilter: ({ options, currentValue, onFilterChange, label, isLarge, isDisabled, customStyle, }: TableFilterProps) => JSX.Element;
