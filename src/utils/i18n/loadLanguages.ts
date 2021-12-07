/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import enUS from "./translations/en-US.json";
import zhCN from "./translations/zh-CN.json";

const loadedLanguages: { [key: string]: { [key: string]: string } } = {
  "en-US": enUS,
  "zh-CN": zhCN,
};

export default loadedLanguages;
