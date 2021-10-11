/// <reference types="react" />
import { ButtonProps } from "../styled-atlaskit/Button/Button";
export interface ButtonWithIconProps extends ButtonProps {
    buttonIcon?: string;
}
export declare const ButtonWithIcon: (props: ButtonWithIconProps) => JSX.Element;
