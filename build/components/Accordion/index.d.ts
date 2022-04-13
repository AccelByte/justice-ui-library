import * as React from "react";
import "./index.scss";
export interface AccordionProps {
    /** Element which is always displayed in the UI */
    title: React.ReactNode;
    /** Element that will be displayed only when the accordion is toggled on */
    children: React.ReactChild;
    /** Custom class name placed in the outermost wrapper of the component */
    className?: string;
    /** Unique id passed to data-qa-id property of the outermost wrapper of the component. Used for automation testing  */
    dataQa?: string | null;
    noPadding?: boolean;
}
export declare const Accordion: ({ title, className, children, dataQa, noPadding }: AccordionProps) => JSX.Element;
