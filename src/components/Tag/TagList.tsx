/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import "./TagList.scss";

export interface TagListProps {
  children: React.ReactNode;
  dataQA: string | null;
}

export const TagList = ({ children, dataQA }: TagListProps) => {
  return <div className={"styled-atlaskit-tag-list"}  data-qa-id={dataQA}>{children}</div>;
};
