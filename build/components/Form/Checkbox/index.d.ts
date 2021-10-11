import * as React from "react";
import "./index.scss";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isChecked: boolean;
    helperText?: string;
    tooltip?: string;
}
export declare const Checkbox: ({ label, helperText, isChecked, tooltip, ...props }: Props) => JSX.Element;
export {};
