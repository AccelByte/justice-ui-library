/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { default as classNames } from "classnames";
import "./index.scss";
import { Icon } from "../Icon";
import "../../styles/icons/fa_icons.css";

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
}: TooltipProps) => {
  const tooltipChildrenRef = React.useRef<HTMLSpanElement>(null);
  const tooltipContentRef = React.useRef<HTMLSpanElement>(null);

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

  return (
    <div className="common-tooltip">
      <span
        ref={tooltipContentRef}
        className={classNames("common-tooltip-content", {
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
