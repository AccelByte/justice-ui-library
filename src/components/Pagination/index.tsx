/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { translation } from "../../utils/i18n";
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

const pagination: React.FunctionComponent<PaginationProps> = ({ paging, changePage, prevDataQa, nextDataQa }) => {
  const renderPrev = () => {
    const onClick = () => changePage(paging.previous);
    const paginationClass = paging.previous ? "navigation" : "disabled";
    return (
      <a className={paginationClass} onClick={onClick} data-qa-id={prevDataQa && prevDataQa}>
        <i className="fa-icon-chevron-left page-icon" /> {translation("pagination.prev")}
      </a>
    );
  };

  const renderNext = () => {
    const onClick = () => changePage(paging.next);
    const paginationClass = paging.next ? "navigation" : "disabled";
    return (
      <a className={paginationClass} onClick={onClick} data-qa-id={nextDataQa && nextDataQa}>
        {translation("pagination.next")} <i className="fa-icon-chevron-right page-icon" />
      </a>
    );
  };

  return (
    <div className="pagination">
      {renderPrev()}
      {renderNext()}
    </div>
  );
};

export { pagination as Pagination };
