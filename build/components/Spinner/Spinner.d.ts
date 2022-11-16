/// <reference types="react" />
import "./index.scss";
export interface SpinnerProps {
    loadingText?: string;
    className?: string;
    dataQa?: string | null;
}
export declare const Spinner: (props: SpinnerProps) => JSX.Element;
