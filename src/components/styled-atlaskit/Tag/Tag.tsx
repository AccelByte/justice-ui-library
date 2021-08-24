/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { default as AkTag } from "@atlaskit/tag";
import { RemovableTagProps } from "@atlaskit/tag/dist/types/tag/internal/removable";
import "./Tag.scss";

export const Tag = ({ ...props }: RemovableTagProps) => {
  return (
    <div className="styled-atlaskit-tag">
      <AkTag {...props} />
    </div>
  );
};
