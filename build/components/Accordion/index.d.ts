import * as React from "react";
import "./index.scss";
export interface AccordionProps {
    title: React.ReactNode;
    children: React.ReactChild;
    className?: string;
    dataQa?: string | null;
}
export declare const Accordion: ({ title, className, children, dataQa }: AccordionProps) => JSX.Element;
