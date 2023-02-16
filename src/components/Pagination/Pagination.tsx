/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import classNames from "classnames";
import { translation } from "../../utils/i18n";
import { SelectOption } from "../../types";
import { Select } from "../Select/Select";
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
    previous?: string | null;
    next?: string | null;
  } | null;
  changePage: (page?: string | null) => void;
  limit?: PaginationLimit;
  prevDataQa?: string | null;
  nextDataQa?: string | null;
}

const Pagination: React.FunctionComponent<PaginationProps> = (props) => {
  const { paging, changePage, limit, prevDataQa = "pagination_prev", nextDataQa = "pagination_next" } = props;

  const renderPrev = () => {
    const onClick = () => changePage(paging?.previous);
    const paginationClass = paging?.previous ? "navigation" : "disabled";
    return (
      <a className={paginationClass} onClick={onClick} data-qa-id={prevDataQa}>
        <i className="icon-chevron-left page-icon" /> {translation("pagination.prev")}
      </a>
    );
  };

  const renderNext = () => {
    const onClick = () => changePage(paging?.next);
    const paginationClass = paging?.next ? "navigation" : "disabled";
    return (
      <a className={paginationClass} onClick={onClick} data-qa-id={nextDataQa}>
        {translation("pagination.next")} <i className="icon-chevron-right page-icon" />
      </a>
    );
  };

  return (
    <div className={classNames("pagination", { "without-limit": !limit, "with-limit": !!limit })}>
      {!!limit && (
        <div className="limit-wrapper">
          <span className="limit-prefix">{translation("pagination.limit.prefix")}</span>
          <Select {...limit} />
          <span className="limit-suffix">{translation("pagination.limit.suffix")}</span>
        </div>
      )}
      <div className="paging-wrapper">
        {renderPrev()}
        {renderNext()}
      </div>
    </div>
  );
};

export { Pagination };
