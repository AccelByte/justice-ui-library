/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import purify from "dompurify";

export const makeSafeReactInnerHTML = (htmlString: string): { __html: string } => {
  return { __html: purify.sanitize(htmlString) };
};
