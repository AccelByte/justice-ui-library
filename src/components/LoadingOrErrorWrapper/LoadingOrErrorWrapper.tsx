/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 *
 */

import React from "react";
import classNames from "classnames";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";
import "./index.scss";
import { ErrorWrapper } from "../ErrorWrapper/ErrorWrapper";
import { translation } from "../../utils/i18n";

export interface LoadingOrErrorWrapperProps {
  isLoading?: boolean;
  loadingInfo?: string;
  error?: Error | null;
  errorTitle?: string;
  errorMessage?: React.ReactNode;
  errorImage?: React.ReactNode;
  isRefreshable?: boolean;
  onErrorActionClick?: () => void;
  errorButtonText?: string;
  children: React.ReactNode;
  isFullHeight?: boolean;
}

export const LoadingOrErrorWrapper = ({
  children,
  isLoading = false,
  loadingInfo = translation("common.loading"),
  error,
  errorImage,
  errorTitle = "",
  errorMessage,
  errorButtonText = translation("common.refreshPage"),
  onErrorActionClick,
  isRefreshable,
  isFullHeight = false,
}: LoadingOrErrorWrapperProps) => {
  if (isLoading) {
    return (
      <div className={classNames("loading-container", { "full-height": isFullHeight })}>
        <LoadingIndicator />
        {loadingInfo && <span className="loading-info">{loadingInfo}</span>}
      </div>
    );
  }

  if (!isLoading && !!error) {
    return (
      <div className={"error-container"}>
        <ErrorWrapper title={errorTitle} subTitle={errorMessage} image={errorImage} />
        {isRefreshable && (
          <button
            className="error-container__button"
            onClick={() => {
              onErrorActionClick ? onErrorActionClick() : window.location.reload();
            }}
          >
            {errorButtonText}
          </button>
        )}
      </div>
    );
  }

  return <div className={classNames("content-container", { "full-height": isFullHeight })}>{children}</div>;
};
