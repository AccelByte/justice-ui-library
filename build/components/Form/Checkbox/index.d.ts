import * as React from "react";
import "./index.scss";
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isChecked: boolean;
    helperText?: string;
    tooltip?: string;
}
export declare const Checkbox: ({ label, helperText, isChecked, tooltip, ...props }: CheckboxProps) => JSX.Element;
