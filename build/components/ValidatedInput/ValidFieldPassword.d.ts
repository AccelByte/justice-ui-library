import * as React from "react";
import { ValidFieldTextProps } from "./ValidFieldText";
import "./ValidFieldPassword.scss";
import { strengthLevelOrder } from "../../constants/password";
export interface ValidFieldPasswordProps extends ValidFieldTextProps {
    strengthLevelIndicator?: keyof typeof strengthLevelOrder;
    translateStrengthLevel?: (level: keyof typeof strengthLevelOrder) => string;
    passHideText: string;
    passVisibleText: string;
    hasGeneratePassword?: boolean;
    defaultGenerateText?: string;
    customPattern?: string;
}
interface State {
    isIconEyeOff: boolean;
    levelColor: string;
}
export declare class ValidFieldPassword extends React.Component<ValidFieldPasswordProps, State> {
    constructor(props: ValidFieldPasswordProps);
    toolTipIconEye: React.RefObject<HTMLElement>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleStrengthIndicator: () => void;
    toggleIconEyeOff: () => void;
    resetTooltipIconEye: () => void;
    hideTooltip: () => void;
    handleEyeIcon: () => JSX.Element;
    handleFieldType: () => "text" | "password";
    handleGeneratePassword: () => void;
    render(): JSX.Element;
}
export {};
