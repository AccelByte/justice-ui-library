import "simplebar/dist/simplebar.min.css";
import * as React from "react";
import { MenuListComponentProps, OptionProps, SelectProps } from "@atlaskit/select";
import { GroupTypeBase } from "react-select";
import "./SelectWithLogo.scss";
export interface SelectItemWithLogo {
    label: string;
    value: string;
    logo: React.ReactNode;
    optionClassName?: string;
}
export declare type GroupedSelectItemWithLogo = GroupTypeBase<SelectItemWithLogo>;
export declare type MenuListProps = MenuListComponentProps<SelectItemWithLogo>;
export interface OptionTemplateWithDataQaProps extends OptionProps<SelectItemWithLogo> {
    dataQa?: string;
    dataQaProps?: string;
}
export interface SelectWithLogoProps extends SelectProps<SelectItemWithLogo> {
    dataQa?: string;
    dataQaProps?: string;
}
export declare const SelectWithLogo: React.FC<SelectWithLogoProps>;
