/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 *
 */

import classNames from "classnames";
import "./index.scss";

export interface LoadingIndicatorProps {
  size?: "small" | "normal" | "large";
}

export const LoadingIndicator = ({ size = "normal" }: LoadingIndicatorProps) => {
  return <span className={classNames("loading-icon", size)} />;
};
