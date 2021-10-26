/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import classNames from "classnames";
import { makeSafeReactInnerHTML } from "../../utils/makeSafeReactInnerHTML";

export interface LineBreakToListProps {
  text: string;
  className?: string;
}

export const LineBreakToList = ({ text, className = "" }: LineBreakToListProps) => {
  const list = text.split("\n").map((text, key) => {
    const isStartWithDash = text.startsWith("-");
    const displayedText = isStartWithDash ? text.slice(1) : text;

    return (
      <li
        key={`${key}-${text}`}
        className={classNames("pl-1", { "ml-4": isStartWithDash })}
        dangerouslySetInnerHTML={makeSafeReactInnerHTML(displayedText)}
      />
    );
  });

  return <ul className={className}>{list}</ul>;
};
