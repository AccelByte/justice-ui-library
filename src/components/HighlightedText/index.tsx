/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";

type Props = {
  text: string;
  highlight: string;
  className?: string;
};

export const HighlightedText = ({ text, highlight, className }: Props) => {
  const escapeHighlight = highlight.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  const findInText = text.split(new RegExp(`(${escapeHighlight})`, "gi"));
  return (
    <span className={className}>
      {findInText.map((text, index) =>
        text.toLowerCase() === highlight.toLowerCase() ? <b key={index}>{text}</b> : text
      )}
    </span>
  );
};
