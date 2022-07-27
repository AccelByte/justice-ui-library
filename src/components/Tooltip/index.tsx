/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { default as classNames } from "classnames";
import "./index.scss";
import { Enum } from "../../types";
import { Icon } from "../Icon";
import "../../styles/icons/fa_icons.css";

export const TOOLTIP_POSITION = Enum("top", "right");

export interface TooltipProps {
  content: string;
  children?: React.ReactNode;
  noClipboard?: boolean;
  positionRight?: boolean;
  narrow?: boolean;
  medium?: boolean;
  isBoxed?: boolean;
  onCopySuccess?: () => void;
  isTooltipShownOnOverflowOnly?: boolean;
  isPositionFixed?: boolean;
  position?: Enum<typeof TOOLTIP_POSITION>;
}

const HIDDEN_TOOLTIP_CLASSNAME = "common-tooltip-content-hidden";

export const Tooltip = ({
  content = "",
  children,
  noClipboard = false,
  positionRight = false,
  narrow = false,
  medium = false,
  isBoxed = false,
  isTooltipShownOnOverflowOnly = false,
  onCopySuccess,
  isPositionFixed = false,
  position = TOOLTIP_POSITION.top,
}: TooltipProps) => {
  const tooltipChildrenRef = React.useRef<HTMLElement>(null);
  const tooltipContentRef = React.useRef<HTMLSpanElement>(null);

  const setFixedTooltipPosition = () => {
    if (!tooltipContentRef.current || !tooltipChildrenRef.current) return;
    const childElement = tooltipChildrenRef.current as HTMLElement;
    const tooltipElement = tooltipContentRef.current as HTMLElement;
    const childBound = childElement.getBoundingClientRect();
    const tooltipBound = tooltipElement.getBoundingClientRect();
    switch (position) {
      case TOOLTIP_POSITION.top: {
        tooltipContentRef.current.style.top = `${childBound.top - childBound.height - tooltipBound.height / 2}px`;
        tooltipContentRef.current.style.left = `${childBound.left}px`;
        break;
      }
      case TOOLTIP_POSITION.right: {
        tooltipContentRef.current.style.top = `${childBound.top - childBound.height / 2}px`;
        tooltipContentRef.current.style.left = `${childBound.left + childBound.width + tooltipBound.width / 2}px`;
        break;
      }
    }
  };

  const onMouseOver = () => {
    if (isPositionFixed) setFixedTooltipPosition();
  };

  React.useEffect(() => {
    const overflowHandler = () => {
      if (!isTooltipShownOnOverflowOnly || !tooltipContentRef.current || !tooltipChildrenRef.current) return;

      const isOverflow = tooltipChildrenRef.current.scrollWidth > tooltipChildrenRef.current.clientWidth;
      if (isOverflow) {
        tooltipContentRef.current.classList.remove(HIDDEN_TOOLTIP_CLASSNAME);
      } else {
        tooltipContentRef.current.classList.add(HIDDEN_TOOLTIP_CLASSNAME);
      }
    };

    overflowHandler();
    window.addEventListener("resize", overflowHandler);
    return () => window.removeEventListener("resize", overflowHandler);
  }, [content, children, isTooltipShownOnOverflowOnly]);

  React.useEffect(() => {
    if (!tooltipContentRef.current) return;
    tooltipContentRef.current.style.top = "";
    tooltipContentRef.current.style.left = "";
  }, [isPositionFixed]);

  return (
    <div className="common-tooltip">
      <span
        ref={tooltipContentRef}
        className={classNames("common-tooltip-content", {
          top: position === TOOLTIP_POSITION.top,
          right: position === TOOLTIP_POSITION.right,
          fixed: isPositionFixed,
          "with-clipboard": !noClipboard,
          "position-right": positionRight,
          "tooltip-boxed": isBoxed,
        })}
      >
        {content}
      </span>
      <span
        ref={tooltipChildrenRef}
        className={classNames("common-tooltip-children", {
          narrow,
          medium,
          "no-clipboard": noClipboard,
        })}
        onMouseOver={onMouseOver}
      >
        {children || content}
        {!noClipboard && (
          <span className="clipboard">
            <CopyToClipboard text={content} onCopy={onCopySuccess}>
              <Icon name="icon icon-clipboard" />
            </CopyToClipboard>
          </span>
        )}
      </span>
    </div>
  );
};
