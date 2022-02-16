import React from "react";
import { ButtonProps as AkButtonProps, ButtonAppearances } from "@atlaskit/button";
import "./Button.scss";
export declare type ButtonAppearance = ButtonAppearances | "outline" | "success";
export interface ButtonProps extends Omit<AkButtonProps, "isDisabled" | "isLoading" | "isSelected" | "spacing" | "type" | "shouldFitContainer" | "autoFocus" | "appearance"> {
    children: React.ReactNode;
    isDisabled?: boolean;
    isLoading?: boolean;
    isSelected?: boolean;
    spacing?: "compact" | "default" | "none";
    type?: "button" | "submit" | "reset";
    shouldFitContainer?: boolean;
    autoFocus?: boolean;
    appearance?: ButtonAppearance;
    dataQa?: string | null;
}
export declare const Button: ({ children, isDisabled, isLoading, isSelected, spacing, type, shouldFitContainer, autoFocus, appearance, className, dataQa, ...props }: ButtonProps) => JSX.Element;
