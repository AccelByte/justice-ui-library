import React from "react";
import { ButtonProps } from "../styled-atlaskit/Button/Button";
interface ButtonWithIconProps extends ButtonProps {
    buttonIcon?: string;
}
declare const ButtonWithIcon: React.FC<ButtonWithIconProps>;
export default ButtonWithIcon;
