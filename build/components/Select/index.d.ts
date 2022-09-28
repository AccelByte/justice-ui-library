/// <reference types="react" />
import { SelectProps as AkSelectProps } from "@atlaskit/select";
import { SelectOption } from "../../types";
import "./index.scss";
export interface SelectProps extends Omit<AkSelectProps<SelectOption, boolean>, "onChange"> {
    onChange?: (option: SelectOption) => void;
    dataQa?: string | null;
    dataQaProps?: string | null;
    async?: boolean;
    loadOptions?: (keyword: string) => Promise<SelectOption[]>;
    onLoadMoreOptions?: (keyword: string, offset: number) => Promise<SelectOption[]>;
}
export declare const Select: ({ dataQa, dataQaProps, ...props }: SelectProps) => JSX.Element;
