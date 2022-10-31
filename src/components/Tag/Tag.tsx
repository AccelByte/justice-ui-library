/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { default as AkTag } from "@atlaskit/tag";
import { RemovableTagProps } from "@atlaskit/tag/dist/types/tag/internal/removable";
import "./index.scss";
import classNames from "classnames";

export const Tag = ({ ...props }: Omit<RemovableTagProps, "color">) => {
  return (
    <div className={classNames("styled-atlaskit-tag", { isRemovable: props.isRemovable })}>
      <AkTag {...props} />
    </div>
  );
};
