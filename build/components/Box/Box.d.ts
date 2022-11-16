import React from "react";
import "./index.scss";
export interface BoxProps {
    children: React.ReactNode;
    title: string;
    dataQa?: string | null;
}
export declare const Box: ({ children, title, dataQa }: BoxProps) => JSX.Element;
