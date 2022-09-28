/// <reference types="react" />
import { SelectProps as AkSelectProps } from "@atlaskit/select";
import { SelectOption } from "../../types";
import "../Select/index.scss";
export interface SelectAsyncProps extends Omit<AkSelectProps<SelectOption, boolean>, "onChange"> {
    onChange?: (option: SelectOption) => void;
    dataQa?: string | null;
    dataQaProps?: string | null;
    loadOptions?: (keyword: string) => Promise<SelectOption[]>;
    onLoadMoreOptions?: (keyword: string, offset: number) => Promise<SelectOption[]>;
}
export declare const SelectAsync: ({ dataQa, dataQaProps, ...props }: SelectAsyncProps) => JSX.Element;
