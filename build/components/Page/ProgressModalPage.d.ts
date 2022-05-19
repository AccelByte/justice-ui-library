import * as React from "react";
import { ModalPageProps } from "./ModalPage";
export interface ProgressModalPageProps extends Omit<ModalPageProps, "isFlex"> {
    title: string;
    step: number;
    stepLabels: string[];
    onClose: () => void;
}
export declare const ProgressModalPage: ({ title, step, stepLabels, className, children, isFullWidth, ...props }: React.PropsWithChildren<ProgressModalPageProps>) => JSX.Element;
