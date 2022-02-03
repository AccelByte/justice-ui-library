import * as React from "react";
import "./index.scss";
export interface ToggleProps {
    isChecked: boolean;
    isLoading?: boolean;
    isEditable?: boolean;
    isDisabled?: boolean;
    label?: string;
    name?: string;
    value?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    activeText?: string;
    inactiveText?: string;
    dataQa?: string;
}
export declare const Toggle: (props: ToggleProps) => JSX.Element;
