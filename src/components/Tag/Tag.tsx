/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { default as AkTag } from "@atlaskit/tag";
import { RemovableTagProps } from "@atlaskit/tag/dist/types/tag/internal/removable";
import "./index.scss";
import classNames from "classnames";

export interface TagsProps extends Omit<RemovableTagProps, "color"> {
    dataQa: string | null;
}

export const Tag = ({ ...props }: TagsProps) => {
  return (
    <div className={classNames("styled-atlaskit-tag", { isRemovable: props.isRemovable })}
         data-qa-id={props.dataQa}>
      <AkTag {...props} />
    </div>
  );
};
