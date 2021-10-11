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
}

export const Box = ({ children, title }: BoxProps) => {
  return (
    <div className="box">
      <div className="header">{title}</div>
      <div className="body">{children}</div>
    </div>
  );
};
