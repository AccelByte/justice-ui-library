import React from "react";
import { ButtonProps as AkButtonProps, ButtonAppearances } from "@atlaskit/button";
import "./Button.scss";
export declare type ButtonAppearance = ButtonAppearances | "outline" | "success";
export interface ButtonProps extends Omit<AkButtonProps, "isDisabled" | "isLoading" | "isSelected" | "spacing" | "type" | "shouldFitContainer" | "autoFocus" | "appearance"> {
    children: React.ReactNode;
    /** Set if the button is disabled. */
    isDisabled?: boolean;
    /**
     * Set if the button is loading. When isLoading is true, text is hidden, and
     * a spinner is shown in its place. The button maintains the width that it
     * would have if the text were visible.
     */
    isLoading?: boolean;
    /** Change the style to indicate the button is selected. */
    isSelected?: boolean;
    /** Set the amount of padding in the button. */
    spacing?: "compact" | "default" | "none";
    /** Set whether it is a button or a form submission. */
    type?: "button" | "submit" | "reset";
    /** Option to fit button width to its parent width */
    shouldFitContainer?: boolean;
    /** Set the button to autofocus on mount. */
    autoFocus?: boolean;
    /** The base styling to apply to the button. */
    appearance?: ButtonAppearance;
    dataQa?: string | null;
}
export declare const Button: ({ children, isDisabled, isLoading, isSelected, spacing, type, shouldFitContainer, autoFocus, appearance, className, dataQa, ...props }: ButtonProps) => JSX.Element;
