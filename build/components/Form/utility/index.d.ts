import React from "react";
import "./index.scss";
import "../../../styles/icons/fa_icons.css";
import { Enum } from "../../../types";
import { RELOADSTATUS } from "../../ValidatedInput/ValidSelect";
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
export declare const FieldLabel: ({ label, children, isRequired, optionalLabel, tooltip, tooltipRef, }: FieldLabelProps) => JSX.Element;
export interface FieldCounterProps {
    value: string | null;
    maxLength: number;
    className?: string;
}
export declare const FieldCounter: ({ value, maxLength, className }: FieldCounterProps) => JSX.Element;
export declare const FieldHelperText: ({ message }: {
    message: React.ReactNode;
}) => JSX.Element;
export declare const FieldReloadMessage: ({ message, onReload, reloaderStatus }: {
    message?: string | undefined;
    onReload?: (() => void) | undefined;
    reloaderStatus?: Enum<Readonly<{
        SUCCESS: "SUCCESS";
        LOADING: "LOADING";
        FAILED: "FAILED";
    }>> | undefined;
}) => JSX.Element | null;
