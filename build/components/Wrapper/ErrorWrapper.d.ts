import React from "react";
import "./ErrorWrapper.scss";
export interface ErrorWrapperProps {
    image?: React.ReactNode;
    title: string;
    subTitle?: React.ReactNode;
    customComponent?: React.ReactNode;
}
export declare const ErrorWrapper: ({ image, title, subTitle, customComponent }: ErrorWrapperProps) => JSX.Element;
