/// <reference types="react" />
import { SelectOption } from "../../types";
import "./index.scss";
/** @deprecated Use StyledRadio instead */
export declare const RadioButtonItem: ({ isDisabled, isSelected, onChange, item, }: {
    isDisabled?: boolean | undefined;
    isSelected?: boolean | undefined;
    onChange?: (() => void) | undefined;
    item: SelectOption<string | boolean>;
}) => JSX.Element;
/** @deprecated Use StyledRadio instead */
export interface RadioButtonProps {
    options: SelectOption<string | boolean>[];
    selectedRadio: SelectOption<string | boolean>;
    onChange: (item: SelectOption<string | boolean>) => void;
    isDisabled?: boolean;
    isHorizontal?: boolean;
    className?: string;
    dataQa?: string | null;
}
/** @deprecated Use StyledRadio instead */
export declare const RadioButton: ({ options, selectedRadio, onChange, isDisabled, isHorizontal, className, dataQa, }: RadioButtonProps) => JSX.Element;
