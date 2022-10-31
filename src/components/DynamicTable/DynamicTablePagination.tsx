/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Select } from "../Select/Select";
import { Pagination, PaginationProps } from "../Pagination/Pagination";
import { SelectOption } from "../../types";
import "./DynamicTablePagination.scss";
import { translation } from "../../utils/i18n";

export interface DynamicTablePaginationProps extends PaginationProps {
  perPage?: SelectOption;
  perPageOptions?: SelectOption[];
  onChangePerPage?: (option: SelectOption) => void;
}

const DynamicTablePagination = (props: DynamicTablePaginationProps) => {
  const { perPage, perPageOptions, onChangePerPage, ...paginationProps } = props;
  return (
    <div className={"dynamic-table-pagination"}>
      <div className="per-page-dropdown-wrapper">
        {!!perPage && !!perPageOptions && !!onChangePerPage && (
          <>
            <span>{translation("dynamicTablePagination.perPage.prefix")}</span>
            <Select
              options={perPageOptions}
              value={perPage}
              onChange={onChangePerPage}
              className={"per-page-dropdown"}
            />
            <span>{translation("dynamicTablePagination.perPage.suffix")}</span>
          </>
        )}
      </div>
      <Pagination {...paginationProps} />
    </div>
  );
};

export default DynamicTablePagination;
