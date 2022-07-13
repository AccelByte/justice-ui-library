import * as React from "react";
import { ValidFieldTextProps } from "./ValidFieldText";
import "./ValidFieldPassword.scss";
import { strengthLevelOrder } from "../../constants";
import "../../styles/icons/fa_icons.css";
export interface ValidFieldPasswordProps extends Omit<ValidFieldTextProps, "type" | "rightIcon" | "isFloat"> {
    strengthLevelIndicator?: keyof typeof strengthLevelOrder;
    hasGeneratePassword?: boolean;
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
    static getDerivedStateFromProps(props: {
        strengthLevelIndicator: keyof typeof strengthLevelOrder;
    }, state: {
        levelColor: string;
    }): "" | {
        levelColor: "poor" | "weak" | "average" | "good" | "excellent";
    };
    toggleIconEyeOff: () => void;
    resetTooltipIconEye: () => void;
    hideTooltip: () => void;
    handleEyeIcon: () => JSX.Element;
    handleFieldType: () => "password" | "text";
    handleGeneratePassword: () => void;
    handleGenerateText: () => JSX.Element;
    render(): JSX.Element;
}
export {};
