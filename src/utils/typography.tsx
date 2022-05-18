/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export const addLineBreaks = (text: string, marginTop: string | number = 4) => {
  return text.split("\n").map((text, index) => {
    return (
      <div key={`${index}-${text}`} style={{ marginTop: !!index ? marginTop : undefined }}>
        {text}
      </div>
    );
  });
};
