import React from "react";
import { FieldTextAreaStatelessProps } from "@atlaskit/field-text-area";
import "./ValidFieldTextArea.scss";
export interface ValidFieldTextAreaProps extends FieldTextAreaStatelessProps {
    label?: string;
    value: string;
    errMessage?: string;
    isInvalid?: boolean;
    optionalLabel?: string;
    helperText?: string;
    tooltip?: string;
    shouldFitContainer?: boolean;
    minimumRows?: number;
    placeholder?: string;
    onChange?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}
export declare const ValidFieldTextArea: ({ label, value, errMessage, isInvalid, optionalLabel, helperText, tooltip, shouldFitContainer, minimumRows, onBlur: onBlurProps, placeholder, maxLength, ...props }: ValidFieldTextAreaProps) => JSX.Element;
