import React from "react";
import { FieldTextAreaStatelessProps } from "@atlaskit/field-text-area";
import "./ValidFieldTextArea.scss";
export interface ValidFieldTextAreaProps extends FieldTextAreaStatelessProps {
    value: string;
    errMessage?: string;
    helperText?: React.ReactNode;
    tooltip?: string;
    isRequired?: boolean;
    dataQa?: string | null;
    optionalLabel?: string;
}
export declare const ValidFieldTextArea: ({ label, placeholder, value, errMessage, helperText, tooltip, shouldFitContainer, isRequired, isInvalid, minimumRows, onBlur: onBlurProps, maxLength, onChange, dataQa, optionalLabel, ...props }: ValidFieldTextAreaProps) => JSX.Element;
