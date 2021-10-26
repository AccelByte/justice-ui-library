/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { HorizontalSelect, HorizontalSelectProps } from ".";

export default {
  title: "Components/Form/HorizontalSelect",
  component: HorizontalSelect,
} as Meta;

const Template: Story<HorizontalSelectProps<string>> = (args) => <HorizontalSelect {...args} />;

export const Example = Template.bind({});
Example.args = {
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ],
  value: "option1",
};
