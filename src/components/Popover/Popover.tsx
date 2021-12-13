/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import classNames from "classnames";
import * as React from "react";
import { renderToString } from "react-dom/server";
import "./Popover.scss";
import ReactTooltip from "react-tooltip";

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

export const Popover = ({
  tooltipRef,
  content,
  className,
  popoverPlacement = "right",
  popoverClass,
  popoverType = "light",
  popoverEvent = "mouseenter",
  popoverEventOff = "mouseleave",
  children,
}: Props) => {
  const renderPopover = () => {
    return {
      ref: tooltipRef,
      "data-for": "popover-tooltip",
      "data-html": true,
      "data-tip": React.isValidElement(content) ? renderToString(content) : content,
      "data-place": popoverPlacement,
      "data-class": classNames("popover-container", popoverClass),
      "data-type": popoverType,
      "data-event": popoverEvent,
      "data-event-off": popoverEventOff,
    };
  };

  return (
    <>
      <div className={className} {...(!!content && renderPopover())}>
        {children}
      </div>
      <ReactTooltip effect="solid" id="popover-tooltip" html={true} />
    </>
  );
};
