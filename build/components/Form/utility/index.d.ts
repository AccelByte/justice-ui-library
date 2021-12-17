import React from "react";
import "./index.scss";
export declare const FieldErrorMessage: ({ message, dataQa }: {
    message?: string | null | undefined;
    dataQa?: string | undefined;
}) => JSX.Element;
export interface FieldLabelProps {
    label?: string;
    children?: React.ReactNode;
    optionalLabel?: string;
    tooltip?: string;
    tooltipRef?: React.RefObject<HTMLElement>;
    isRequired?: boolean;
}
export declare const FieldLabel: ({ label, children, isRequired, optionalLabel, tooltip, tooltipRef }: FieldLabelProps) => JSX.Element;
export interface FieldCounterProps {
    value: string | null;
    maxLength: number;
    className?: string;
}
export declare const FieldCounter: ({ value, maxLength, className }: FieldCounterProps) => JSX.Element;
export declare const FieldHelperText: ({ message }: {
    message: React.ReactNode;
}) => JSX.Element;
