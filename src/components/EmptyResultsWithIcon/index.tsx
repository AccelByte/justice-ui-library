/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import "./index.scss";
import { default as classNames } from "classnames";

export interface EmptyResultsProps {
  imgSrc: string;
  title: string;
  description?: string | React.ReactNode;
  /** Any React component rendered below `description` */
  children?: React.ReactChild | null;
  dataQa?: string | null;
  /** If `true`, it gives more vertical padding */
  isTaller?: boolean;
}

export const EmptyResultsWithIcon = ({ imgSrc, title, description, children, isTaller, dataQa }: EmptyResultsProps) => {
  return (
    <div className={classNames("emptyResultsWithIcon", { taller: isTaller })} data-qa-id={dataQa}>
      <img src={imgSrc} />
      <div className="emptyResultsWithIconTitle mt-2">{title}</div>
      {description && <div className="emptyResultsWithIconDescription">{description}</div>}
      {children && <div>{children}</div>}
    </div>
  );
};
