/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { DateTimePicker, DateTimePickerProps } from "./index";

export default {
  title: "Components/DateTimePicker",
  component: DateTimePicker,
} as Meta;

const Template: Story<DateTimePickerProps> = (args) => <DateTimePicker {...args} />;

export const Default = Template.bind({});
Default.args = { closeOnSelect: true, inputProps: { placeholder: "Select time" }, utc: true, timeFormat: "HH:mm", dateFormat: "YYYY-MM-DD" };
