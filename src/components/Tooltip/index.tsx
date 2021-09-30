/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { default as classNames } from "classnames";
import "./index.scss";
import { Icon } from "../Icon";

export interface TooltipProps {
  content: string;
  children?: React.ReactNode;
  noClipboard?: boolean;
  positionRight?: boolean;
  narrow?: boolean;
  medium?: boolean;
  isBoxed?: boolean;
  onCopySuccess?: () => void;
}

export const Tooltip = ({
  content = "",
  children,
  noClipboard = false,
  positionRight = false,
  narrow = false,
  medium = false,
  isBoxed = false,
  onCopySuccess,
}: TooltipProps) => {
  return (
    <div className="common-tooltip">
      <span
        className={classNames("common-tooltip-content", {
          "position-right": positionRight,
          "tooltip-boxed": isBoxed,
        })}
      >
        {content}
      </span>
      <span
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
              <Icon name="icon fa-icon-clipboard" />
            </CopyToClipboard>
          </span>
        )}
      </span>
    </div>
  );
};
