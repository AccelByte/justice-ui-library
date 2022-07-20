import * as React from "react";
import { Enum, SelectOption } from "../../types";
import { SelectProps } from "..";
import "./ValidSelect.scss";
export declare const RELOADSTATUS: Readonly<{
    SUCCESS: "SUCCESS";
    LOADING: "LOADING";
    FAILED: "FAILED";
}>;
export interface ValidSelectProps extends SelectProps {
    label?: string;
    placeholder?: string;
    options: SelectOption[];
    name?: string;
    value: SelectOption | SelectOption[] | string | null;
    reloaderStatus?: Enum<typeof RELOADSTATUS>;
    errMessage?: string;
    onChange: (option: SelectOption | SelectOption[]) => void;
    reloadMessage?: string;
    onReload?: () => void;
    optionalLabel?: string;
    isShowReloadWhileFetchFailed?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
    dataQa?: string | null;
    isRequired?: boolean;
    isClearable?: boolean;
    tooltip?: string;
    selectDataQa?: string | null;
    isMulti?: boolean;
    className?: string;
    helperText?: React.ReactNode;
}
export declare const ValidSelect: ({ label, placeholder, options, name, value, onChange, errMessage, optionalLabel, isInvalid, isDisabled, isRequired, isClearable, tooltip, selectDataQa, isMulti, className, helperText, ...props }: ValidSelectProps) => JSX.Element;
