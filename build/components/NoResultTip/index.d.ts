import React from "react";
import "./index.scss";
export interface NoResultTipProps {
    title?: string;
    primaryText: React.ReactNode;
    secondaryText?: string;
    boxShadow?: boolean;
    inModal?: boolean;
    className?: string;
    errorImage?: string;
    errorImageClass?: string;
    dataQa?: string | null;
    additionalComponent?: React.ReactNode | string;
}
export declare const NoResultTip: ({ title, primaryText, secondaryText, className, errorImage, errorImageClass, boxShadow, inModal, dataQa, additionalComponent, }: NoResultTipProps) => JSX.Element;
