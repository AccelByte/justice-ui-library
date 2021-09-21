import * as React from "react";
import "./index.scss";
import { Enum } from "../../types";
export declare const TipType: Readonly<{
    warning: "warning";
    error: "error";
    success: "success";
    info: "info";
}>;
export interface TipProps {
    show: boolean;
    appearance: Enum<typeof TipType>;
    message: React.ReactNode;
    isPositionRelative?: boolean;
    icon?: string;
    onClose?: (event: React.MouseEvent) => void;
    style?: React.CSSProperties;
    className?: string;
}
export declare const Tip: React.SFC<TipProps>;
