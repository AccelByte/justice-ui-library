/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 *
 */

import React from "react";
import "./ErrorWrapper.scss";

export interface ErrorWrapperProps {
  image?: string;
  title: string;
  subTitle?: string;
  customComponent?: React.ReactNode;
}

export const ErrorWrapper = ({ image, title, subTitle, customComponent }: ErrorWrapperProps) => {
  if (customComponent) {
    return <div className={"error-wrapper error-wrapper__custom-component"}>{customComponent}</div>;
  }

  return (
    <div className={"error-wrapper"}>
      {image && <img className={"error-wrapper__image"} src={image} alt={title} />}
      <h3 className={"error-wrapper__title"}>{title}</h3>
      {subTitle && <h6 className={"error-wrapper__subtitle"}>{subTitle}</h6>}
    </div>
  );
};
