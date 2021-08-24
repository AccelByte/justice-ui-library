import * as React from "react";
import "./index.scss";
export interface PaginationProps {
    paging: {
        previous?: string;
        next?: string;
        first?: string;
        last?: string;
    };
    changePage: (page?: string) => void;
}
declare const pagination: React.FunctionComponent<PaginationProps>;
export { pagination as Pagination };
