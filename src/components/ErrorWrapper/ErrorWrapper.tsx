/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 *
 */

import React from "react";
import "./index.scss";

export interface ErrorWrapperProps {
  image?: React.ReactNode;
  title: string;
  subTitle?: React.ReactNode;
  customComponent?: React.ReactNode;
  dataQA?: string | null;
}

export const ErrorWrapper = ({ image, title, subTitle, customComponent, dataQA }: ErrorWrapperProps) => {
  if (customComponent) {
    return <div className={"error-wrapper error-wrapper__custom-component"} data-qa-id={dataQA}>{customComponent}</div>;
  }

  return (
    <div className={"error-wrapper"} data-qa-id={dataQA}>
      {image && (
        <>{typeof image === "string" ? <img className={"error-wrapper__image"} src={image} alt={title} /> : image}</>
      )}
      <h3 className={"error-wrapper__title"}>{title}</h3>
      {subTitle && <h6 className={"error-wrapper__subtitle"}>{subTitle}</h6>}
    </div>
  );
};
