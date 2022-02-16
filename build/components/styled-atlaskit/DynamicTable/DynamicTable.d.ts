import React, { PropsWithChildren } from "react";
import { StatelessProps } from "@atlaskit/dynamic-table/types";
import "./DynamicTable.scss";
export interface DynamicTableProps extends PropsWithChildren<StatelessProps> {
    className?: string;
    customContent?: React.ReactNode;
    dataQa?: string | null;
    noPadding?: boolean;
}
export declare const DynamicTable: (props: DynamicTableProps) => JSX.Element;
