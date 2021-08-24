/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import "./index.scss";

interface HorizontalFieldTextProps {
  children?: React.ReactNode;
  label?: string;
  isLabelHidden?: boolean;
  className?: string;
  rightCellClassName?: string;
  dataQa?: string | null;
  labelAlignment?: "left" | "center" | "right";
}

export class HorizontalFieldText extends React.Component<HorizontalFieldTextProps> {
  render() {
    const {
      children,
      label = "",
      isLabelHidden = false,
      rightCellClassName,
      className,
      dataQa,
      labelAlignment = "right",
    } = this.props;
    return (
      <div
        className={classNames("horizontalFieldText", className, {
          "label-hidden": isLabelHidden,
        })}
      >
        {!isLabelHidden && (
          <div className={classNames("cell-1", labelAlignment)}>
            <span className="label">{label}</span>
          </div>
        )}
        <div className={classNames("cell-2", rightCellClassName)} data-qa-id={dataQa}>
          {children}
        </div>
      </div>
    );
  }
}
