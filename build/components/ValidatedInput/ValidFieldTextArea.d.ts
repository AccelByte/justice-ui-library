/// <reference types="react" />
import { FieldTextAreaStatelessProps } from "@atlaskit/field-text-area";
import "./ValidFieldTextArea.scss";
export interface ValidFieldTextAreaProps extends FieldTextAreaStatelessProps {
    value: string;
    errMessage?: string;
    helperText?: string;
    tooltip?: string;
    isRequired?: boolean;
    dataQa?: string | null;
    optionalLabel?: string;
}
export declare const ValidFieldTextArea: ({ label, placeholder, value, errMessage, helperText, tooltip, shouldFitContainer, isRequired, minimumRows, onBlur: onBlurProps, maxLength, onChange, dataQa, optionalLabel, ...props }: ValidFieldTextAreaProps) => JSX.Element;
