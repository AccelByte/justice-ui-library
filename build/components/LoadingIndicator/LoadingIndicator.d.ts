/// <reference types="react" />
import "./index.scss";
export interface LoadingIndicatorProps {
    size?: "small" | "normal" | "large";
    dataQa?: string | null;
}
export declare const LoadingIndicator: ({ size, dataQa }: LoadingIndicatorProps) => JSX.Element;
