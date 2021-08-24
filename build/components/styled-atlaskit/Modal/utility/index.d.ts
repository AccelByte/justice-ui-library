import React from "react";
import "./index.scss";
export interface ModalFormProps {
    children: React.ReactNode;
    fullHorizontal?: boolean;
}
export declare const ModalForm: ({ children, fullHorizontal }: ModalFormProps) => JSX.Element;
export declare const ModalMessage: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
