import React from "react";
import "./TagList.scss";
export interface TagListProps {
    children: React.ReactNode;
    dataQA?: string | null;
}
export declare const TagList: ({ children, dataQA }: TagListProps) => JSX.Element;
