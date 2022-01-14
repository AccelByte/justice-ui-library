import * as React from "react";
import "./index.scss";
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {
    label: string;
    isChecked: boolean;
    isDisabled?: boolean;
    value?: string | number | boolean;
    helperText?: string;
    tooltip?: string;
}
export declare const Checkbox: ({ label, helperText, isChecked, tooltip, isDisabled, value, ...props }: CheckboxProps) => JSX.Element;
