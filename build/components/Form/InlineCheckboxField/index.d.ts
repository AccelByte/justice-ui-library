import * as React from "react";
import "./index.scss";
export interface InlineCheckboxFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    checked: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
    dataQa?: string | null;
}
export declare const InlineCheckboxField: ({ checked, onClick, isDisabled, readOnly, dataQa, ...checkboxProps }: InlineCheckboxFieldProps) => JSX.Element;
