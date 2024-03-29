import * as React from "react";
import "./index.scss";
import "../../styles/icons/fa_icons.css";
export interface CheckboxProps {
    label?: string;
    isChecked: boolean;
    isDisabled?: boolean;
    value?: string | number | boolean;
    helperText?: string;
    tooltip?: string;
    dataQa?: string | null;
    dataQaProps?: string | null;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    className?: string;
}
export declare const Checkbox: ({ label, helperText, isChecked, tooltip, isDisabled, value, dataQa, dataQaProps, className, onChange, onClick, }: CheckboxProps) => JSX.Element;
