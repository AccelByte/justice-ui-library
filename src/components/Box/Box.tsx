/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import "./index.scss";

export interface BoxProps {
  children: React.ReactNode;
  title: string;
  dataQa?: string | null;
}

export const Box = ({ children, title, dataQa }: BoxProps) => {
  return (
    <div className="box" data-qa-id={dataQa}>
      <div className="header">{title}</div>
      <div className="body">{children}</div>
    </div>
  );
};
