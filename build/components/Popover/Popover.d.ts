import * as React from "react";
import "./Popover.scss";
interface Props {
    tooltipRef: React.RefObject<HTMLDivElement>;
    content?: React.ReactNode | string;
    popoverPlacement?: string;
    className?: string;
    popoverType?: string;
    popoverEvent?: string;
    popoverEventOff?: string;
    children?: React.ReactNode;
}
declare const Popover: React.FC<Props>;
export default Popover;
