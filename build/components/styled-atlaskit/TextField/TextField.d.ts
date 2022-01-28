/// <reference types="react" />
import { FieldTextProps } from "@atlaskit/field-text";
import "./TextField.scss";
export interface TextFieldProps extends FieldTextProps {
    dataQa?: string | null;
}
export declare const TextField: ({ ...props }: TextFieldProps) => JSX.Element;
