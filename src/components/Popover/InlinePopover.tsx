/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import "./InlinePopover.scss";
import { default as InlineDialog } from "@atlaskit/inline-dialog";
import { Placement } from "@atlaskit/inline-dialog/types";
import classNames from "classnames";
import { Enum } from "../../types";

export const INLINE_POPOVER_TYPE = Enum("light", "dark")
export type InlinePopoverType = keyof typeof INLINE_POPOVER_TYPE

export interface InlinePopoverProps {
  content: React.ReactNode;
  isOpen: boolean;
  children: React.ReactNode;
  placement?: Placement;
  type?: InlinePopoverType
}

export const InlinePopover: React.FC<InlinePopoverProps> = (props) => {
  const { content, children, isOpen, placement, type } = props;
  const popoverPlacement = placement || "right";

  return (
    <div className={classNames("inline-popover", type)}>
      <InlineDialog
        isOpen={!!content && isOpen}
        content={content}
        placement={popoverPlacement}
        testId={classNames("InlinePopover", popoverPlacement)}
      >
        {children}
      </InlineDialog>
    </div>
  );
};
