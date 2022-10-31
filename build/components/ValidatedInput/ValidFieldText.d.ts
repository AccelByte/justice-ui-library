import * as React from "react";
import { default as FieldText } from "@atlaskit/field-text";
import "./ValidFieldText.scss";
import { Placement } from "@atlaskit/inline-dialog/types";
import { InlinePopoverType } from "../InlinePopover/InlinePopover";
export declare class Input extends FieldText {
    componentWillReceiveProps(nextProps: any): void;
}
export interface ValidFieldTextProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, "maxLength" | "placeholder" | "disabled" | "onBlur" | "className"> {
    onKeyDown?: (event: React.FormEvent<HTMLInputElement>) => void;
    label?: string;
    name: string;
    value: string;
    errMessage?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isRequired?: boolean;
    optionalLabel?: string;
    isLabelHidden?: boolean;
    isInvalid?: boolean;
    type?: "number" | "text" | "password" | "float";
    min?: number;
    max?: number;
    helperText?: React.ReactNode;
    tooltip?: string;
    dataQa?: string | null;
    dataQaProps?: string | null;
    validFieldTextRef?: React.RefObject<HTMLDivElement>;
    rightIcon?: React.ReactNode;
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
    renderInput: () => JSX.Element;
    render(): JSX.Element;
}
export {};
