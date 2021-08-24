/// <reference types="react" />
import { StatelessProps } from "@atlaskit/dynamic-table/types";
import "./DynamicTable.scss";
export interface DynamicTableProps extends StatelessProps {
    className?: string;
}
export declare const DynamicTable: ({ className, ...props }: DynamicTableProps) => JSX.Element;
