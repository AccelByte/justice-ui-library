import React from "react";
import "./index.scss";
export declare const FieldErrorMessage: ({ message }: {
    message?: string | undefined;
}) => JSX.Element;
export declare const FieldLabel: ({ label, children, optionalLabel, tooltip, tooltipRef }: {
    label?: string | undefined;
    children?: React.ReactNode;
    optionalLabel?: string | undefined;
    tooltip?: string | undefined;
    tooltipRef?: React.RefObject<HTMLElement> | undefined;
}) => JSX.Element;
export declare const FieldCounter: ({ value, maxLength, className, }: {
    value: string | null;
    maxLength: number;
    className?: string | undefined;
}) => JSX.Element;
export declare const FieldHelperText: ({ message }: {
    message: string;
}) => JSX.Element;
