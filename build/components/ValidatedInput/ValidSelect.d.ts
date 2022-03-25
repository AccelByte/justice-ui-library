/// <reference types="react" />
import { Enum, SelectOption } from "../../types";
export declare const RELOADSTATUS: Readonly<{
    SUCCESS: "SUCCESS";
    LOADING: "LOADING";
    FAILED: "FAILED";
}>;
export interface ValidSelectProps {
    label?: string;
    placeholder?: string;
    options: SelectOption[];
    name?: string;
    value: SelectOption | SelectOption[] | string | null;
    reloaderStatus?: Enum<typeof RELOADSTATUS>;
    errMessage?: string;
    onChange: (option: SelectOption) => void;
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
    selectDataQa?: string;
    isMulti?: boolean;
    className?: string;
}
export declare const ValidSelect: ({ label, placeholder, options, name, value, onChange, errMessage, optionalLabel, isInvalid, isDisabled, isRequired, isClearable, tooltip, selectDataQa, isMulti, className, }: ValidSelectProps) => JSX.Element;
