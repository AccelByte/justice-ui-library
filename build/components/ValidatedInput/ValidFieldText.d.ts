import * as React from "react";
import { default as FieldText } from "@atlaskit/field-text";
import "./ValidFieldText.scss";
import { Placement } from "@atlaskit/inline-dialog/types";
import { InlinePopoverType } from "../Popover/InlinePopover";
export declare class Input extends FieldText {
    componentWillReceiveProps(nextProps: any, nextContext: any): void;
}
export interface ValidFieldTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onKeyDown?: (event: React.FormEvent<HTMLInputElement>) => void;
    label: string;
    name: string;
    value: string;
    errMessage?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isRequired?: boolean;
    optionalLabel?: string;
    isLabelHidden?: boolean;
    type?: "number" | "text" | "password";
    min?: number;
    max?: number;
    helperText?: string;
    tooltip?: string;
    dataQa?: string | null;
    dataQaProps?: string | null;
    validFieldTextRef?: React.RefObject<HTMLDivElement>;
    rightIcon?: React.ReactNode;
    isFloat?: boolean;
    autoComplete?: "on" | "off";
    showTooltipOnFocus?: boolean;
    popoverContent?: React.ReactNode;
    popoverPlacement?: Placement;
    popoverType?: InlinePopoverType;
    onFocus?: (event: React.FormEvent<HTMLInputElement>) => void;
    customField?: React.ReactNode;
}
interface State {
    isFocus: boolean;
}
export declare class ValidFieldText extends React.Component<ValidFieldTextProps, State> {
    constructor(props: ValidFieldTextProps);
    toolTipRef: React.RefObject<HTMLElement>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    hideTooltip: () => void;
    showTooltip: () => void;
    handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    handleFocus: (event: React.FormEvent<HTMLInputElement>) => void;
    handleOnKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
