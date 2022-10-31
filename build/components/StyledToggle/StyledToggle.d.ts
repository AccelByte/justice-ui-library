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
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    activeText?: string;
    inactiveText?: string;
    className?: string;
    dataQa?: string | null;
}
export declare const StyledToggle: ({ isChecked, isLoading, isEditable, isDisabled, label, name, value, onChange, activeText, inactiveText, className, dataQa, }: StyledToggleProps) => JSX.Element;
