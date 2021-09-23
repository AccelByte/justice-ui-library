import * as React from "react";
import "./EmptyResultsWithIcon.scss";
interface Props {
    imgSrc: string;
    title: string;
    description?: string | React.ReactNode;
    children?: React.ReactChild;
    isTaller?: boolean;
}
export declare const EmptyResultsWithIcon: ({ imgSrc, title, description, children, isTaller }: Props) => JSX.Element;
export {};
