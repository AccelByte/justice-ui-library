import * as React from "react";
import "./index.scss";
import { SelectOption } from "../../types";
export interface TableFilterProps {
    onFilterChange: (option: SelectOption) => void;
    options: SelectOption[];
    currentValue: SelectOption;
    label?: string;
    tooltip?: string;
    isLarge?: boolean;
    isDisabled?: boolean;
    customStyle?: React.CSSProperties;
    className?: string;
    menuPortalTarget?: HTMLElement;
}
export declare const TableFilter: ({ options, currentValue, onFilterChange, label, tooltip, isLarge, isDisabled, customStyle, className, menuPortalTarget, }: TableFilterProps) => JSX.Element;
