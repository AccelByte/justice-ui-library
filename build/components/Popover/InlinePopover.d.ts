import * as React from "react";
import "./InlinePopover.scss";
import { Placement } from "@atlaskit/inline-dialog/types";
export interface InlinePopoverProps {
    content?: React.ReactNode | string;
    isOpen: boolean;
    children: React.ReactNode;
    placement?: Placement;
}
export declare const InlinePopover: React.FC<InlinePopoverProps>;
