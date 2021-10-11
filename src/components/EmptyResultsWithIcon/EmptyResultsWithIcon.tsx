/*
 * Copyright (c) 2020 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import "./EmptyResultsWithIcon.scss";
import { default as classNames } from "classnames";

interface Props {
  imgSrc: string;
  title: string;
  description?: string | React.ReactNode;
  children?: React.ReactChild;
  dataQa?: string | null;
  isTaller?: boolean;
}

export const EmptyResultsWithIcon = ({ imgSrc, title, description, children, isTaller, dataQa }: Props) => {
  return (
    <div className={classNames("emptyResultsWithIcon", { taller: isTaller })} data-qa-id={dataQa}>
      <img src={imgSrc} />
      <div className="emptyResultsWithIconTitle mt-2">{title}</div>
      {description && <div className="emptyResultsWithIconDescription">{description}</div>}
      {children && <div>{children}</div>}
    </div>
  );
};
