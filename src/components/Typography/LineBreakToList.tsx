/*
 * Copyright (c) 2020-2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import classNames from "classnames";
import * as React from "react";

interface Props {
  text: string;
  className?: string;
}

export const LineBreakToList = ({ text, className = "" }: Props) => {
  const list = text.split("\n").map((text, key) => {
    const isStartWithDash = text.startsWith("-");
    const displayedText = isStartWithDash ? text.slice(1) : text;

    return (
      <li
        key={`${key}-${text}`}
        className={classNames("pl-1", { "ml-4": isStartWithDash })}
      >
        {displayedText}
      </li>
    );
  });

  return <ul className={className}>{list}</ul>;
};
