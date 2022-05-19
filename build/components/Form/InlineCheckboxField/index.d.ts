import * as React from "react";
import "./index.scss";
export interface InlineCheckboxFieldProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, "readOnly"> {
    checked: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
    dataQa?: string | null;
}
export declare const InlineCheckboxField: ({ onClick, isDisabled, dataQa, ...checkboxProps }: InlineCheckboxFieldProps) => JSX.Element;
