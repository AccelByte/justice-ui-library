import React from "react";
import "./LoadingOrErrorWrapper.scss";
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
export declare const LoadingOrErrorWrapper: ({ children, isLoading, loadingInfo, error, errorImage, errorTitle, errorMessage, errorButtonText, onErrorActionClick, isRefreshable, isFullHeight, }: LoadingOrErrorWrapperProps) => JSX.Element;
