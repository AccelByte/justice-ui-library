import * as React from "react";
import "./index.scss";
export interface TooltipProps {
    content: string;
    children?: React.ReactNode;
    noClipboard?: boolean;
    positionRight?: boolean;
    narrow?: boolean;
    medium?: boolean;
    isBoxed?: boolean;
    onCopySuccess?: () => void;
}
export declare const Tooltip: ({ content, children, noClipboard, positionRight, narrow, medium, isBoxed, onCopySuccess, }: TooltipProps) => JSX.Element;
