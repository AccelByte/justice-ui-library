import * as React from "react";
import "./index.scss";
import { Enum } from "../../types";
export declare const APPEARANCE_TYPE: Readonly<{
    warning: "warning";
    error: "error";
    success: "success";
    info: "info";
}>;
export interface BannerProps {
    appearance: Enum<typeof APPEARANCE_TYPE>;
    message: React.ReactNode;
    dismissBanner?: (event: React.MouseEvent) => void;
}
export declare const Banner: ({ appearance, message, dismissBanner }: BannerProps) => JSX.Element;
