import * as React from "react";
import { SelectOption } from "../../types";
interface Props {
    label?: string;
    placeholder?: string;
    options: SelectOption[];
    errMessage?: string;
    onChange: (option: SelectOption) => void;
    optionalLabel?: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    value?: SelectOption[] | null;
    tooltip?: string;
    helperText?: React.ReactNode;
    menuPortalTarget?: HTMLElement;
}
export declare const ValidMultiSelect: ({ label, placeholder, options, onChange, errMessage, optionalLabel, isInvalid, isRequired, value, isDisabled, tooltip, helperText, menuPortalTarget, }: Props) => JSX.Element;
export {};
