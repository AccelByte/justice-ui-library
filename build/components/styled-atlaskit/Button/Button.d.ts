import React from "react";
import { ButtonProps as AkButtonProps, ButtonAppearances } from "@atlaskit/button";
import "./Button.scss";
export interface ButtonProps extends Omit<AkButtonProps, "isDisabled" | "isLoading" | "isSelected" | "spacing" | "type" | "shouldFitContainer" | "autoFocus" | "appearance"> {
    children: React.ReactNode;
    isDisabled?: boolean;
    isLoading?: boolean;
    isSelected?: boolean;
    spacing?: "compact" | "default" | "none";
    type?: "button" | "submit" | "reset";
    shouldFitContainer?: boolean;
    autoFocus?: boolean;
    appearance?: ButtonAppearances | "outline" | "success";
    dataQa?: string | null;
}
export declare const Button: ({ children, isDisabled, isLoading, isSelected, spacing, type, shouldFitContainer, autoFocus, appearance, className, dataQa, ...props }: ButtonProps) => JSX.Element;
