import * as React from "react";
import "./index.scss";
interface Props {
    tooltipRef: React.RefObject<HTMLDivElement>;
    content?: React.ReactNode | string;
    className?: string;
    popoverPlacement?: string;
    popoverClass?: string;
    popoverType?: string;
    popoverEvent?: string;
    popoverEventOff?: string;
    children?: React.ReactNode;
}
export declare const Popover: ({ tooltipRef, content, className, popoverPlacement, popoverClass, popoverType, popoverEvent, popoverEventOff, children, }: Props) => JSX.Element;
export {};
