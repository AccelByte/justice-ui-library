/// <reference types="react" />
import { SelectProps as AkSelectProps } from "@atlaskit/select";
import { SelectOption } from "../../../types";
import "./Select.scss";
interface SelectProps extends Omit<AkSelectProps<SelectOption, boolean>, "onChange"> {
    onChange?: (option: SelectOption) => void;
}
export declare const Select: ({ isMulti, onChange, ...props }: SelectProps) => JSX.Element;
export {};
