/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 *
 */

import React from "react";
import { LoadingIndicator } from "./LoadingIndicator";
import "./LoadingOrErrorWrapper.scss";
import { ErrorWrapper } from "../Wrapper/ErrorWrapper";

export interface LoadingOrErrorWrapperProps {
  isLoading?: boolean;
  loadingInfo?: string;
  error?: Error | null;
  errorTitle?: string;
  errorMessage?: string;
  errorImage?: string;
  isRefreshable?: boolean;
  onErrorActionClick?: () => void;
  errorButtonText?: string;
  children: React.ReactNode;
}

export const LoadingOrErrorWrapper = ({
  children,
  isLoading = false,
  loadingInfo,
  error,
  errorImage,
  errorTitle = "",
  errorMessage,
  errorButtonText = "",
  onErrorActionClick,
  isRefreshable,
}: LoadingOrErrorWrapperProps) => {
  if (isLoading) {
    return (
      <div className="loading-container">
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

  return <div className={"content-container"}>{children}</div>;
};
