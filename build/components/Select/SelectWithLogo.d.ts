import * as React from "react";
import { MenuListComponentProps, OptionProps, SelectProps } from "@atlaskit/select";
import "./SelectWithLogo.scss";
export interface SelectItemWithLogo {
    label: string;
    value: string;
    logo: React.ReactNode;
    optionClassName?: string;
}
export interface GroupedSelectItemWithLogo {
    label: string;
    options?: SelectItemWithLogo[];
}
export interface MenuListProps extends MenuListComponentProps<SelectItemWithLogo> {
    Simplebar: any;
}
export interface OptionTemplateWithDataQaProps extends OptionProps<SelectItemWithLogo> {
    dataQa?: string;
    dataQaProps?: string;
}
export interface SelectWithLogoProps extends SelectProps<SelectItemWithLogo> {
    dataQa?: string;
    dataQaProps?: string;
    Simplebar: any;
}
export declare const SelectWithLogo: React.FC<SelectWithLogoProps>;
