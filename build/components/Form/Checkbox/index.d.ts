import * as React from "react";
import "./index.scss";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isChecked: boolean;
    helperText?: string;
}
export declare const Checkbox: ({ label, helperText, isChecked, ...props }: Props) => JSX.Element;
export {};
