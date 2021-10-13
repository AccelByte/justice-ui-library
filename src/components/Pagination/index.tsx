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
  prevText?: string;
  nextText?: string;
  prevDataQa?: string;
  nextDataQa?: string;
}

const pagination: React.FunctionComponent<PaginationProps> = ({
  paging,
  changePage,
  prevText = "Prev",
  nextText = "Next",
  prevDataQa,
  nextDataQa,
}) => {
  const renderPrev = () => {
    const onClick = () => changePage(paging.previous);
    const paginationClass = paging.previous ? "navigation" : "disabled";
    return (
      <a className={paginationClass} onClick={onClick} data-qa-id={prevDataQa && prevDataQa}>
        <i className="fa-icon-chevron-left page-icon" /> {prevText}
      </a>
    );
  };

  const renderNext = () => {
    const onClick = () => changePage(paging.next);
    const paginationClass = paging.next ? "navigation" : "disabled";
    return (
      <a className={paginationClass} onClick={onClick} data-qa-id={nextDataQa && nextDataQa}>
        {nextText} <i className="fa-icon-chevron-right page-icon" />
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
