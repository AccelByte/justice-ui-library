/// <reference types="react" />
import { ButtonProps } from "../Button";
export interface ButtonWithIconProps extends Omit<ButtonProps, "children"> {
    buttonIcon?: string;
    iconPosition?: "left" | "right";
    children?: React.ReactNode;
}
export declare const ButtonWithIcon: ({ buttonIcon, iconPosition, appearance, isDisabled, isLoading, className, ...buttonProps }: ButtonWithIconProps) => JSX.Element;
