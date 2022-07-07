/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { PropsWithChildren } from "react";
import { DynamicTableStateless as AkDynamicTable } from "@atlaskit/dynamic-table";
import { StatelessProps } from "@atlaskit/dynamic-table/types";
import classNames from "classnames";
import DynamicTablePagination, { DynamicTablePaginationProps } from "./DynamicTablePagination";
import "./index.scss";

export interface DynamicTableProps extends PropsWithChildren<StatelessProps> {
  className?: string;
  /** Any React element placed above the table */
  customContent?: React.ReactNode;
  dataQa?: string | null;
  /** Whether to have a padding bottom for the table */
  noPadding?: boolean;
  pagination?: DynamicTablePaginationProps;
}

export const DynamicTable = ({
  className,
  children,
  customContent = null,
  dataQa = null,
  noPadding = false,
  pagination,
  ...props
}: DynamicTableProps) => {
  return (
    <div className={classNames("styled-atlaskit-table", { "no-padding": noPadding }, className)} data-qa-id={dataQa}>
      {customContent}
      <AkDynamicTable {...props} />
      {!!pagination && <DynamicTablePagination {...pagination} />}
      {children}
    </div>
  );
};
