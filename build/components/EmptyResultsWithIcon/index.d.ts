import * as React from "react";
import "./index.scss";
export interface EmptyResultsProps {
    imgSrc: string;
    title: string;
    description?: string | React.ReactNode;
    /** Any React component rendered below `description` */
    children?: React.ReactChild | null;
    dataQa?: string | null;
    /** If `true`, it gives more vertical padding */
    isTaller?: boolean;
}
export declare const EmptyResultsWithIcon: ({ imgSrc, title, description, children, isTaller, dataQa }: EmptyResultsProps) => JSX.Element;
