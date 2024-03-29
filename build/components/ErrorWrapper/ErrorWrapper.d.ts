import React from "react";
import "./index.scss";
export interface ErrorWrapperProps {
    image?: React.ReactNode;
    title: string;
    subTitle?: React.ReactNode;
    customComponent?: React.ReactNode;
    dataQa?: string | null;
}
export declare const ErrorWrapper: ({ image, title, subTitle, customComponent, dataQa }: ErrorWrapperProps) => JSX.Element;
