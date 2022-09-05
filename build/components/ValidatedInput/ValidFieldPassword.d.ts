import * as React from "react";
import { ValidFieldTextProps } from "./ValidFieldText";
import "./ValidFieldPassword.scss";
import "../../styles/icons/fa_icons.css";
import { OptionsType } from "@zxcvbn-ts/core/dist/types";
export interface ValidFieldPasswordProps extends Omit<ValidFieldTextProps, "type" | "rightIcon" | "isFloat"> {
    hasGeneratePassword?: boolean;
    customPattern?: string;
    hasPasswordStrengthMeter?: boolean;
    zxcvbnOption?: OptionsType;
}
interface State {
    isIconEyeOff: boolean;
    passwordStrengthScore: number | null;
}
export declare class ValidFieldPassword extends React.Component<ValidFieldPasswordProps, State> {
    constructor(props: ValidFieldPasswordProps);
    toolTipIconEye: React.RefObject<HTMLElement>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: ValidFieldPasswordProps): void;
    toggleIconEyeOff: () => void;
    resetTooltipIconEye: () => void;
    hideTooltip: () => void;
    handleEyeIcon: () => JSX.Element;
    handleFieldType: () => "password" | "text";
    handleGeneratePassword: () => void;
    handleGenerateText: () => JSX.Element;
    getStrengthLevelBasedOnScore: (score: number | null) => "veryWeak" | "weak" | "fair" | "strong" | "veryStrong" | undefined;
    calculatePasswordStrength: (password: string) => void;
    debounceCalculatePasswordStrength: (password: string) => void;
    render(): JSX.Element;
}
export {};
