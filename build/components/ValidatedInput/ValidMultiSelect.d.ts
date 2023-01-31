import * as React from "react";
import { SelectOption } from "../../types";
import { SelectProps } from "..";
interface Props {
    label?: string;
    placeholder?: string;
    options: SelectOption[];
    errMessage?: string;
    onChange: (option: SelectOption[]) => void;
    optionalLabel?: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    value?: SelectOption[] | null;
    tooltip?: string;
    helperText?: React.ReactNode;
    menuPortalTarget?: HTMLElement;
    formatOptionLabel?: SelectProps["formatOptionLabel"];
}
export declare const ValidMultiSelect: ({ label, placeholder, options, onChange, errMessage, optionalLabel, isInvalid, isRequired, value, isDisabled, tooltip, helperText, menuPortalTarget, formatOptionLabel, }: Props) => JSX.Element;
export {};
