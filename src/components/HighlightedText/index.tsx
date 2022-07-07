/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export interface HighlightedTextProps {
  text: string;
  /** Will be rendered bold if `text` containts it */
  highlight: string;
  className?: string;
}

export const HighlightedText = ({ text, highlight, className }: HighlightedTextProps) => {
  const escapeHighlight = highlight.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  const findInText = text.split(new RegExp(`(${escapeHighlight})`, "gi"));
  return (
    <span className={className}>
      {findInText.map((text, index) =>
        text.toLowerCase() === highlight.toLowerCase() ? (
          <b key={index} style={{ fontWeight: 500 }}>
            {text}
          </b>
        ) : (
          text
        )
      )}
    </span>
  );
};
