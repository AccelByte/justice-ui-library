/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { DividerProps, HorizontalDivider } from "./Divider";

export default {
  title: "Components/Divider",
  component: HorizontalDivider,
} as Meta;

const Template: Story<DividerProps> = (args) => <HorizontalDivider {...args} />;

export const Example = Template.bind({});
Example.args = { label: "Divider label" };
