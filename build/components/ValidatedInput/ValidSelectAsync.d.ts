import * as React from "react";
import { AsyncPaginateProps, LoadOptions } from "react-select-async-paginate";
import "./ValidSelectAsync.scss";
import { Enum } from "../../types";
import { RELOADSTATUS } from "./ValidSelect";
export interface ValidSelectAsyncProps<OptionType, Group, Additional, isMulti extends boolean> extends AsyncPaginateProps<OptionType, Group, Additional, isMulti> {
    label?: string;
    errMessage?: string;
    optionalLabel?: string;
    isInvalid?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    tooltip?: string;
    className?: string;
    dataQa?: string | null;
    helperText?: React.ReactNode;
    isShowReloadWhileFetchFailed: boolean;
    reloadMessage?: string;
    onReload?: () => void;
    reloaderStatus?: Enum<typeof RELOADSTATUS>;
}
export declare type ValidSelectAsyncLoadOptions<OptionType> = LoadOptions<OptionType, unknown, unknown>;
export declare const ValidSelectAsync: <OptionType, Group, Additional, isMulti extends boolean>({ label, errMessage, optionalLabel, isInvalid, isRequired, tooltip, className, dataQa, helperText, isShowReloadWhileFetchFailed, reloadMessage, onReload, reloaderStatus, ...props }: ValidSelectAsyncProps<OptionType, Group, Additional, isMulti>) => JSX.Element;
