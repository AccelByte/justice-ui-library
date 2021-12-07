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

export interface InlinePopoverProps {
  content: React.ReactNode;
  isOpen: boolean;
  children: React.ReactNode;
  placement?: Placement;
}

export const InlinePopover: React.FC<InlinePopoverProps> = (props) => {
  const { content, children, isOpen, placement } = props;
  const popoverPlacement = placement || "right";

  return (
    <div className="inline-popover">
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
