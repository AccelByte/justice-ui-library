import * as React from "react";
import "./ModalPage.scss";
export interface ModalPageProps {
    onClose?: () => void;
    className?: string;
    isFlex?: boolean;
    isFullWidth?: boolean;
    dataQa?: string | null;
}
export declare const ModalPage: ({ onClose, children, className, isFlex, isFullWidth, dataQa, }: React.PropsWithChildren<ModalPageProps>) => JSX.Element;
