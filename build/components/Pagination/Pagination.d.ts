import * as React from "react";
import { SelectOption } from "../../types";
import "./index.scss";
import "../../styles/icons/fa_icons.css";
interface PaginationLimit {
    value: SelectOption;
    options: SelectOption[];
    onChange: (option: SelectOption) => void;
    dataQa?: string | null;
}
export interface PaginationProps {
    paging: {
        previous?: string;
        next?: string;
    };
    changePage: (page?: string) => void;
    limit?: PaginationLimit;
    prevDataQa?: string | null;
    nextDataQa?: string | null;
}
declare const Pagination: React.FunctionComponent<PaginationProps>;
export { Pagination };
