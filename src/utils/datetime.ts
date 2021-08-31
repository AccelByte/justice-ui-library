/*
 *  Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 *  This is licensed software from AccelByte Inc, for limitations
 *  and restrictions contact your company contract manager.
 */

import * as moment from "moment";

export const formatDateForReactDateTimePicker = (date: string) => {
  return moment.utc(date).format("YYYY-MM-DD hh:mm a");
};

export const formatDateForReactDatePicker = (date: string | number | Date) => {
  return moment.utc(date).format("YYYY-MM-DD");
};