import * as React from "react";
import "./index.scss";
/** @deprecated Use Checkbox instead */
export interface InlineCheckboxFieldProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, "readOnly"> {
    checked: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
    dataQa?: string | null;
}
/** @deprecated Use Checkbox instead */
export declare const InlineCheckboxField: ({ onClick, isDisabled, dataQa, ...checkboxProps }: InlineCheckboxFieldProps) => JSX.Element;
