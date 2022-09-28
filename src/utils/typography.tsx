/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export const addLineBreaks = (text: string, marginTop: string | number = 4) => {
  return text.split("\n").map((text, index) => {
    return (
      <p key={`${index}-${text}`} style={{ margin: "unset", marginTop: !!index ? marginTop : "unset", }}>
        {text}
      </p>
    );
  });
};
