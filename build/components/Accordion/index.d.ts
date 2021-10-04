import * as React from "react";
import "./index.scss";
export interface AccordionProps {
    title: React.ReactNode;
    children: React.ReactChild;
    className?: string;
}
declare const Accordion: ({ title, className, children }: AccordionProps) => JSX.Element;
export default Accordion;
