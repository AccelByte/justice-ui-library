import * as React from "react";
import "./index.scss";
import { Enum } from "../../types";
import "../../styles/icons/fa_icons.css";
export declare const APPEARANCE_TYPE: Readonly<{
    success: "success";
    warning: "warning";
    info: "info";
    error: "error";
}>;
export interface BannerProps {
    appearance: Enum<typeof APPEARANCE_TYPE>;
    message: React.ReactNode;
    /** Function triggered by clicking `x` icon. Usually used for making the banner disappears */
    dismissBanner?: (event: React.MouseEvent) => void;
    dataQa?: string | null;
}
export declare const Banner: ({ appearance, message, dismissBanner, dataQa }: BannerProps) => JSX.Element;
