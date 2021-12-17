/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ValidFieldTextArea, ValidFieldTextAreaProps } from "./ValidFieldTextArea";

export default {
  title: "Components/ValidatedInput/ValidFieldTextArea",
  component: ValidFieldTextArea,
} as Meta;

export const Example: Story<ValidFieldTextAreaProps> = (args) => <ValidFieldTextArea {...args} />;

Example.args = {
  placeholder: "Field Placeholder",
  type: "text",
  value: "Example Value",
  label: "Field Label",
  name: "field-name",
  tooltip: "some tooltip",
  maxLength: 100
};
