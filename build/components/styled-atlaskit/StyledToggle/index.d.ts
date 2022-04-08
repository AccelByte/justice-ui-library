import * as React from "react";
import "./index.scss";
export interface StyledToggleProps {
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
    className?: string;
    dataQa?: string;
}
export declare const StyledToggle: ({ isChecked, isLoading, isEditable, isDisabled, label, name, value, onBlur, onChange, onFocus, activeText, inactiveText, className, dataQa, }: StyledToggleProps) => JSX.Element;
