import * as React from "react";
import "./index.scss";
export interface PaginationProps {
    paging: {
        previous?: string;
        next?: string;
    };
    changePage: (page?: string) => void;
    prevDataQa?: string | null;
    nextDataQa?: string | null;
}
declare const pagination: React.FunctionComponent<PaginationProps>;
export { pagination as Pagination };
