import { SelectProps } from "@atlaskit/select";
import { ReactNode } from "react";
import { SelectOption } from "../../types";
export interface CheckboxSelectProps extends Pick<SelectProps<SelectOption, true>, "options" | "onBlur" | "onFocus" | "isDisabled" | "isClearable" | "menuIsOpen" | "blurInputOnSelect" | "closeMenuOnSelect" | "menuPosition" | "minMenuHeight" | "maxMenuHeight" | "menuPortalTarget"> {
    onChange?: (option: SelectOption[]) => void;
    value: SelectOption[] | null;
    className?: string;
    isValueHidden?: boolean;
    replacementText?: ReactNode;
}
export declare const CheckboxSelect: ({ onChange, value, className, isValueHidden, isClearable, replacementText, ...props }: CheckboxSelectProps) => JSX.Element;
