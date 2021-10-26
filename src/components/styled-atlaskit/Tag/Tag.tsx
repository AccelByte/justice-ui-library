/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { default as AkTag } from "@atlaskit/tag";
import { RemovableTagProps } from "@atlaskit/tag/dist/types/tag/internal/removable";
import "./Tag.scss";
import classNames from "classnames";

export const Tag = ({ ...props }: RemovableTagProps) => {
  return (
    <div className={classNames("styled-atlaskit-tag", { isRemovable: props.isRemovable })}>
      <AkTag {...props} />
    </div>
  );
};
