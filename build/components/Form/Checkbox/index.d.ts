import * as React from "react";
import "./index.scss";
export interface CheckboxProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    label?: string;
    isChecked: boolean;
    isDisabled?: boolean;
    value?: string | number | boolean;
    helperText?: string;
    tooltip?: string;
    dataQa?: string | null;
}
export declare const Checkbox: ({ label, helperText, isChecked, tooltip, isDisabled, value, ...props }: CheckboxProps) => JSX.Element;
