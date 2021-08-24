/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

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

const pagination: React.FunctionComponent<PaginationProps> = ({ paging, changePage }) => {
  const renderPrev = () => {
    const onClick = () => changePage(paging.previous);
    const paginationClass = paging.previous ? "navigation" : "disabled";
    return (
      <a className={paginationClass} onClick={onClick}>
        <i className="fa-icon-chevron-left page-icon" /> Prev
      </a>
    );
  };

  const renderNext = () => {
    const onClick = () => changePage(paging.next);
    const paginationClass = paging.next ? "navigation" : "disabled";
    return (
      <a className={paginationClass} onClick={onClick}>
        Next <i className="fa-icon-chevron-right page-icon" />
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
