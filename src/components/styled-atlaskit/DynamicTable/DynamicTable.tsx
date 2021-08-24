/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { DynamicTableStateless as AkDynamicTable } from "@atlaskit/dynamic-table";
import { StatelessProps } from "@atlaskit/dynamic-table/types";
import classNames from "classnames";
import "./DynamicTable.scss";

export interface DynamicTableProps extends StatelessProps {
  className?: string;
}

export const DynamicTable = ({ className, ...props }: DynamicTableProps) => {
  return (
    <div className={classNames("styled-atlaskit-table", className)}>
      <AkDynamicTable {...props} />
    </div>
  );
};
