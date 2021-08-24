/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import "./index.scss";

export interface CardInformationTableProps {
  children: React.ReactNode;
}

export const CardInformationTable = ({ children }: CardInformationTableProps) => {
  return <div className="information-table">{children}</div>;
};
