import React from "react";
import "./LoadingOrErrorWrapper.scss";
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
export declare const LoadingOrErrorWrapper: ({ children, isLoading, loadingInfo, error, errorImage, errorTitle, errorMessage, errorButtonText, onErrorActionClick, isRefreshable, }: LoadingOrErrorWrapperProps) => JSX.Element;
