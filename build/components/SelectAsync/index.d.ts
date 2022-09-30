/// <reference types="react" />
import { SelectProps as AkSelectProps } from "@atlaskit/select";
import { FormatOptionLabelMeta, OptionTypeBase } from "react-select";
import { SelectOption } from "../../types";
import "../Select/index.scss";
export declare const reactSelectComponents: import("react-select/src/components").Components;
export declare type ReactSelectFormatOptionLabelMeta<OptionType extends OptionTypeBase, isMulti extends boolean> = FormatOptionLabelMeta<OptionType, isMulti>;
export interface SelectAsyncProps extends Omit<AkSelectProps<SelectOption, boolean>, "onChange"> {
    onChange?: (option: SelectOption) => void;
    dataQa?: string | null;
    dataQaProps?: string | null;
    loadOptions?: (keyword: string) => Promise<SelectOption[]>;
    onLoadMoreOptions?: (keyword: string, offset: number) => Promise<SelectOption[]>;
}
export declare const SelectAsync: ({ dataQa, dataQaProps, ...props }: SelectAsyncProps) => JSX.Element;
