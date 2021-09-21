/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import "./index.scss";
import { Enum } from "../../types";

export const TipType = Enum("success", "error", "warning", "info");

export interface TipProps {
  show: boolean;
  appearance: Enum<typeof TipType>;
  message: React.ReactNode;
  isPositionRelative?: boolean;
  icon?: string;
  onClose?: (event: React.MouseEvent) => void;
  style?: React.CSSProperties;
  className?: string;
}

export const Tip: React.SFC<TipProps> = ({
  show = false,
  message = "",
  appearance,
  isPositionRelative = false,
  icon = "",
  onClose,
  style,
  className,
}: TipProps) => {
  return (
    <div
      style={style}
      className={classNames("tip-notification", className, {
        show,
        relative: isPositionRelative,
        success: appearance === TipType.success,
        error: appearance === TipType.error,
        info: appearance === TipType.info,
        warning: appearance === TipType.warning,
      })}
    >
      {icon && <i className={`icon-${icon}`} />}
      <span className="notification-message">{message}</span>

      {onClose && (
        <button onClick={onClose}>
          <i className={`icon-x`} />
        </button>
      )}
    </div>
  );
};
