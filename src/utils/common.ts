/*
 *  Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 *  This is licensed software from AccelByte Inc, for limitations
 *  and restrictions contact your company contract manager.
 */

export const debounce = <F extends (...args: any) => any>(func: F, delay = 500) => {
  let timeout: NodeJS.Timer;

  const inDebounce = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };

  return inDebounce as (...args: Parameters<F>) => ReturnType<F>;
};