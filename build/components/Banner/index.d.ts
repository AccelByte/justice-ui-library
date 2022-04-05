import * as React from "react";
import "./index.scss";
import { Enum } from "../../types";
export declare const APPEARANCE_TYPE: Readonly<{
    warning: "warning";
    success: "success";
    info: "info";
    error: "error";
}>;
export interface BannerProps {
    appearance: Enum<typeof APPEARANCE_TYPE>;
    message: React.ReactNode;
    /** Function to make the component disappear. To make it possible, show the component only on a certain condition or state, then use `dismissBanner` to set the state to a falsy value */
    dismissBanner?: (event: React.MouseEvent) => void;
    dataQa?: string | null;
}
export declare const Banner: ({ appearance, message, dismissBanner, dataQa }: BannerProps) => JSX.Element;
