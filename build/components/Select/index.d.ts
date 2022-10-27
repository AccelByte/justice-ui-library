/// <reference types="react" />
import { SelectProps as AkSelectProps } from "@atlaskit/select";
import { SelectOption } from "../../types";
import "./index.scss";
export interface SelectProps extends Pick<AkSelectProps<SelectOption, boolean>, "autoFocus" | "blurInputOnSelect" | "className" | "classNamePrefix" | "closeMenuOnSelect" | "components" | "defaultInputValue" | "defaultMenuIsOpen" | "defaultValue" | "filterOption" | "formatGroupLabel" | "formatOptionLabel" | "getOptionLabel" | "getOptionValue" | "isClearable" | "isDisabled" | "isMulti" | "isOptionDisabled" | "isSearchable" | "loadingMessage" | "maxMenuHeight" | "menuIsOpen" | "menuPlacement" | "menuPortalTarget" | "menuPosition" | "minMenuHeight" | "name" | "noOptionsMessage" | "onBlur" | "onFocus" | "onInputChange" | "options" | "placeholder" | "value"> {
    onChange?: (option: SelectOption) => void;
    dataQa?: string | null;
    dataQaProps?: string | null;
}
export declare const Select: ({ isMulti, onChange, dataQa, dataQaProps, noOptionsMessage, ...props }: SelectProps) => JSX.Element;
