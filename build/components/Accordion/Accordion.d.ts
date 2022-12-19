import * as React from "react";
import "./index.scss";
import "../../styles/icons/fa_icons.css";
export interface AccordionProps {
    /** Element which is always displayed in the UI */
    title: React.ReactNode;
    /** Element that will be displayed only when the accordion is toggled on */
    children: React.ReactChild;
    /** Custom class name placed in the outermost wrapper of the component */
    className?: string;
    /** A testId prop is provided for specified elements, which is a unique string that appears as a data attribute `data-qa-id` in the rendered code, serving as a hook for automated tests.  */
    dataQa?: {
        id?: string | null;
        props?: string | null;
    };
    /** If true, remove padding from .accordionContent */
    noPadding?: boolean;
    /** To disable toggle upon clicking the accordion  */
    isToggleDisabled?: boolean;
    /** To open Accordion by default **/
    defaultOpen?: boolean;
}
export declare const Accordion: ({ title, className, children, dataQa, noPadding, isToggleDisabled, defaultOpen }: AccordionProps) => JSX.Element;
