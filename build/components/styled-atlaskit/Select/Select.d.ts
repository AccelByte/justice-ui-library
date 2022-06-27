/// <reference types="react" />
import { SelectProps as AkSelectProps } from "@atlaskit/select";
import { SelectOption } from "../../../types";
import "./Select.scss";
export interface SelectProps extends Omit<AkSelectProps<SelectOption, boolean>, "onChange"> {
    onChange?: (option: SelectOption) => void;
    isCreatable?: boolean;
}
export declare const Select: ({ isMulti, isCreatable, onChange, ...props }: SelectProps) => JSX.Element;
