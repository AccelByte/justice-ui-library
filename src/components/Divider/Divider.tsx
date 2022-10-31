/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import classNames from "classnames";
import "./index.scss";

export interface DividerProps {
  label?: string;
  className?: string;
}

export const HorizontalDivider = ({ label = "", className = "" }: DividerProps) => (
  <div className={classNames("horizontalDivider", className)}>{label && <span className="label">{label}</span>}</div>
);
