import React from "react";
import "./ErrorWrapper.scss";
export interface ErrorWrapperProps {
    image?: string;
    title: string;
    subTitle?: string;
    customComponent?: React.ReactNode;
}
export declare const ErrorWrapper: ({ image, title, subTitle, customComponent }: ErrorWrapperProps) => JSX.Element;
