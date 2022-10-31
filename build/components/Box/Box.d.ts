import React from "react";
import "./index.scss";
export interface BoxProps {
    children: React.ReactNode;
    title: string;
}
export declare const Box: ({ children, title }: BoxProps) => JSX.Element;
