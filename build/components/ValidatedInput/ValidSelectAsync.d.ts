/// <reference types="react" />
import { AsyncPaginateProps } from "react-select-async-paginate";
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
    helperText?: string;
}
export declare const ValidSelectAsync: <OptionType, Group, Additional, isMulti extends boolean>({ label, errMessage, optionalLabel, isInvalid, isRequired, tooltip, className, dataQa, helperText, ...props }: ValidSelectAsyncProps<OptionType, Group, Additional, isMulti>) => JSX.Element;
