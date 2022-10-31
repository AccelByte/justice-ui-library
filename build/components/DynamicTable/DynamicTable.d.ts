import React, { PropsWithChildren } from "react";
import { StatelessProps } from "@atlaskit/dynamic-table/types";
import { DynamicTablePaginationProps } from "./DynamicTablePagination";
import "./index.scss";
export interface DynamicTableProps extends PropsWithChildren<StatelessProps> {
    className?: string;
    /** Any React element placed above the table */
    customContent?: React.ReactNode;
    dataQa?: string | null;
    /** Whether to have a padding bottom for the table */
    noPadding?: boolean;
    pagination?: DynamicTablePaginationProps;
}
export declare const DynamicTable: ({ className, children, customContent, dataQa, noPadding, pagination, ...props }: DynamicTableProps) => JSX.Element;
