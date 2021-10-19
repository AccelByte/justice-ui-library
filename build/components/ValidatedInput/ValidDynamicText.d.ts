/// <reference types="react" />
import "./ValidDynamicText.scss";
export interface ValidDynamicTextProps {
    label?: string;
    placeholder?: string;
    name: string;
    values: string[];
    onChange: (values: string[]) => void;
    isDisabled?: boolean;
    type?: "text" | "number" | "password";
    errMessage?: string;
    maxField: number;
    addText?: string;
}
export declare const ValidDynamicText: ({ placeholder, name, values, onChange, isDisabled, type, label, errMessage, maxField, addText, }: ValidDynamicTextProps) => JSX.Element;
