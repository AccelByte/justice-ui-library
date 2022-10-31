/// <reference types="react" />
import { PaginationProps } from "../Pagination/Pagination";
import { SelectOption } from "../../types";
import "./DynamicTablePagination.scss";
export interface DynamicTablePaginationProps extends PaginationProps {
    perPage?: SelectOption;
    perPageOptions?: SelectOption[];
    onChangePerPage?: (option: SelectOption) => void;
}
declare const DynamicTablePagination: (props: DynamicTablePaginationProps) => JSX.Element;
export default DynamicTablePagination;
