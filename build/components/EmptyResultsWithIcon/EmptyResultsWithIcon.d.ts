import * as React from "react";
import "./EmptyResultsWithIcon.scss";
interface Props {
    imgSrc: string;
    title: string;
    description?: string | React.ReactNode;
    children?: React.ReactChild;
    dataQa?: string | null;
    isTaller?: boolean;
}
export declare const EmptyResultsWithIcon: ({ imgSrc, title, description, children, isTaller, dataQa }: Props) => JSX.Element;
export {};
