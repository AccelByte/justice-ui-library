import * as React from "react";
import { default as FieldText } from "@atlaskit/field-text";
import "./ValidFieldText.scss";
export declare class Input extends FieldText {
    componentWillReceiveProps(nextProps: any, nextContext: any): void;
}
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    onKeyDown?: (event: React.FormEvent<HTMLInputElement>) => void;
    label: string;
    name: string;
    value: string;
    errMessage?: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
    optionalLabel?: string;
    isLabelHidden?: boolean;
    type?: "number" | "text" | "password";
    min?: number;
    max?: number;
    helperText?: string;
    tooltip?: string;
    popoverContent?: React.ReactNode | string;
    validFieldTextRef?: React.RefObject<HTMLDivElement>;
    rightIcon?: React.ReactNode;
}
interface State {
    isFocus: boolean;
}
export declare class ValidFieldText extends React.Component<Props, State> {
    constructor(props: Props);
    toolTipRef: React.RefObject<HTMLElement>;
    toolTipDivRef: React.RefObject<HTMLDivElement>;
    toolTipIconEye: React.RefObject<HTMLElement>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    hideTooltip: () => void;
    showTooltip: () => void;
    resetTooltipIconEye: () => void;
    handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    handleFocus: () => void;
    render(): JSX.Element;
}
export {};
