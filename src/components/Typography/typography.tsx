/*
 *
 *  * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import * as React from "react";
import { Enum } from "../../types";

export const EllipsisCropPosition = Enum("START", "MIDDLE", "END");
interface EllipsisConfig {
  cropAt: Enum<typeof EllipsisCropPosition>;
}

export function ellipsify(
  text: string,
  displayedLength = 8,
  config: EllipsisConfig = { cropAt: EllipsisCropPosition.END }
) {
  if (text.length < displayedLength) {
    return text;
  }

  let croppedText = "";
  switch (config.cropAt) {
    case EllipsisCropPosition.END:
      croppedText = `${text.slice(0, displayedLength)}...`;
      break;
    case EllipsisCropPosition.START:
      croppedText = `...${text.slice(-1 * displayedLength)}`;
      break;
    case EllipsisCropPosition.MIDDLE:
      const left = text.slice(0, Math.floor(displayedLength / 2));
      const right = text.slice(-1 * Math.ceil(displayedLength / 2));
      croppedText = `${left}...${right}`;
      break;
    default:
      croppedText = text;
  }
  return croppedText;
}

export const addLineBreaks = (text: string) => {
  return text.split("\n").map((text, key) => {
    return (
      <div key={`${key}-${text}`} style={{ marginTop: "4px" }}>
        {text.trim()}
      </div>
    );
  });
};
