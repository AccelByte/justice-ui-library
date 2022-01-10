/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */


import * as React from "react";
import { default as classNames } from "classnames";
import "./index.scss";

export interface SpinnerProps {
  loadingText?: string;
  className?: string;
}

export const Spinner = (props: SpinnerProps) => {
  const { loadingText, className } = props;
  return (
    <div className={classNames("loader-wrapper show", className)}>
      <div className="loading-flag">
        <span className="loading-icon" />
        {loadingText && <span className="loading-info">{loadingText}</span>}
      </div>
    </div>
  );
};
