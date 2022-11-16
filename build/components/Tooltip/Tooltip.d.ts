import * as React from "react";
import "./index.scss";
import { Enum } from "../../types";
import "../../styles/icons/fa_icons.css";
export declare const TOOLTIP_POSITION: Readonly<{
    right: "right";
    top: "top";
}>;
export interface TooltipProps {
    content: string;
    children?: React.ReactNode;
    noClipboard?: boolean;
    positionRight?: boolean;
    narrow?: boolean;
    medium?: boolean;
    isBoxed?: boolean;
    onCopySuccess?: () => void;
    isTooltipShownOnOverflowOnly?: boolean;
    isPositionFixed?: boolean;
    position?: Enum<typeof TOOLTIP_POSITION>;
    shouldFitContainer?: boolean;
    dataQa?: string | null;
}
export declare const Tooltip: ({ content, children, noClipboard, positionRight, narrow, medium, isBoxed, isTooltipShownOnOverflowOnly, onCopySuccess, isPositionFixed, position, shouldFitContainer, dataQa }: TooltipProps) => JSX.Element;
