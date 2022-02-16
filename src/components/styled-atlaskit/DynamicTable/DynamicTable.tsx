/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { PropsWithChildren } from "react";
import { DynamicTableStateless as AkDynamicTable } from "@atlaskit/dynamic-table";
import { StatelessProps } from "@atlaskit/dynamic-table/types";
import classNames from "classnames";
import "./DynamicTable.scss";

export interface DynamicTableProps extends PropsWithChildren<StatelessProps> {
  className?: string;
  customContent?: React.ReactNode;
  dataQa?: string | null;
  noPadding?: boolean;
}

export const DynamicTable = (props: DynamicTableProps) => {
  const { className, children, customContent = null, dataQa = null, noPadding = false } = props;
  return (
    <div className={classNames("styled-atlaskit-table", { "no-padding": noPadding }, className)} data-qa-id={dataQa}>
      {customContent}
      <AkDynamicTable {...props} />
      {children}
    </div>
  );
};
