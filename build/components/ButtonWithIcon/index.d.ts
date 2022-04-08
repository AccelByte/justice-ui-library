/// <reference types="react" />
import { ButtonProps } from "../styled-atlaskit/Button/Button";
export interface ButtonWithIconProps extends ButtonProps {
    buttonIcon?: string;
    iconPosition?: "left" | "right";
}
export declare const ButtonWithIcon: ({ buttonIcon, iconPosition, appearance, isDisabled, isLoading, className, ...buttonProps }: ButtonWithIconProps) => JSX.Element;
