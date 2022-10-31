/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Tip, TipProps, TipType } from "./Tip";

export default {
  title: "Components/Tip",
  component: Tip,
} as Meta;

const Template: Story<TipProps> = (args) => <Tip {...args} />;

export const Example = Template.bind({});
Example.args = {
  show: true,
  appearance: TipType.info,
  message: "Tip message",
  isPositionRelative: true,
  icon: "ab-sidebar-analytics",
};
