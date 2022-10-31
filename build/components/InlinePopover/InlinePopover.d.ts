import * as React from "react";
import "./index.scss";
import { Placement, Props } from "@atlaskit/inline-dialog/types";
export declare const INLINE_POPOVER_TYPE: Readonly<{
    light: "light";
    dark: "dark";
}>;
export declare type InlinePopoverType = keyof typeof INLINE_POPOVER_TYPE;
export declare type PopoverPlacement = Placement;
export interface InlinePopoverProps extends Omit<Props, "testId"> {
    isOpen: boolean;
    type?: InlinePopoverType;
}
export declare const InlinePopover: React.FC<InlinePopoverProps>;
