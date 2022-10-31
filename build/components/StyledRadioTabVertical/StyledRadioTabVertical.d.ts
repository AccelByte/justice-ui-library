import * as React from "react";
import "./index.scss";
import { RadioOption } from "../../types";
export interface RadioOptionWithRenderAction<T = string> extends RadioOption<T> {
    render?: () => React.ReactNode;
    dataQaProps?: string | null;
}
interface Props {
    label?: string;
    options: RadioOptionWithRenderAction<string | boolean>[];
    selectedRadio: string | boolean;
    onChange: (item: RadioOption<string | boolean>) => void;
    disabled?: boolean;
    errMessage?: string;
    isRequired?: boolean;
    isInvalid?: boolean;
    tooltip?: string;
    dataQa?: string | null;
    className?: string;
}
export declare const StyledRadioTabVertical: ({ label, options, selectedRadio, onChange, errMessage, isInvalid, disabled, isRequired, tooltip, className, dataQa, }: Props) => JSX.Element;
export {};
