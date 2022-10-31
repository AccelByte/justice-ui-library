import * as React from "react";
import { ModalPageProps } from "../ModalPage/ModalPage";
export interface ProgressModalPageProps extends Omit<ModalPageProps, "isFlex"> {
    title: string;
    subtitle?: string;
    step: number;
    stepLabels: string[];
    onClose: () => void;
}
export declare const ProgressModalPage: ({ title, subtitle, step, stepLabels, className, children, isFullWidth, ...props }: React.PropsWithChildren<ProgressModalPageProps>) => JSX.Element;
