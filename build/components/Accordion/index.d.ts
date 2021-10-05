import * as React from "react";
import "./index.scss";
export interface AccordionProps {
    title: React.ReactNode;
    children: React.ReactChild;
    className?: string;
}
export declare const Accordion: ({ title, className, children }: AccordionProps) => JSX.Element;
