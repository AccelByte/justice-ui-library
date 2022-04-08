import * as React from "react";
import "./InlinePopover.scss";
import { Placement } from "@atlaskit/inline-dialog/types";
export declare const INLINE_POPOVER_TYPE: Readonly<{
    light: "light";
    dark: "dark";
}>;
export declare type InlinePopoverType = keyof typeof INLINE_POPOVER_TYPE;
export declare type PopoverPlacement = Placement;
export interface InlinePopoverProps {
    content: React.ReactNode;
    isOpen: boolean;
    children: React.ReactNode;
    placement?: Placement;
    type?: InlinePopoverType;
    onContentBlur?: () => void;
    onContentClick?: () => void;
    onContentFocus?: () => void;
    onClose?: () => void;
}
export declare const InlinePopover: React.FC<InlinePopoverProps>;
