/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import classNames from "classnames";
import React from "react";
import { addLineBreaks } from "../Typography/typography";
import "./index.scss";

export interface NoResultTipProps {
  title?: string;
  primaryText: React.ReactNode;
  secondaryText?: string;
  boxShadow?: boolean;
  inModal?: boolean;
  className?: string;
  errorImage?: string;
  errorImageClass?: string;
  dataQa?: string | null;
  additionalComponent?: React.ReactNode | string;
}

export const NoResultTip = ({
  title,
  primaryText,
  secondaryText,
  className,
  errorImage,
  errorImageClass,
  boxShadow = true,
  inModal = false,
  dataQa,
  additionalComponent,
}: NoResultTipProps) => {
  return (
    <div data-qa-id={dataQa} className={classNames("justice-search-no-result", className, { boxShadow }, { inModal })}>
      <div className={"justice-search-no-result-wrapper"}>
        {!!errorImage && <img className={errorImageClass} src={errorImage} />}

        {!!title && <h4>{title}</h4>}
        {typeof primaryText === "string" ? addLineBreaks(primaryText) : <p> {primaryText} </p>}
        {!!secondaryText && <p>{secondaryText}</p>}

        {additionalComponent}
      </div>
    </div>
  );
};
