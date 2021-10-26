/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { InlineCheckboxField, InlineCheckboxFieldProps } from ".";

export default {
  title: "Components/Form/InlineCheckboxField",
  component: InlineCheckboxField,
} as Meta;

const Template: Story<InlineCheckboxFieldProps> = (args) => <InlineCheckboxField {...args} />;

export const Example = Template.bind({});
Example.args = {
  checked: true,
  readOnly: true,
};
