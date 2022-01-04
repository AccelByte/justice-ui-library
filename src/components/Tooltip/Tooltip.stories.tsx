/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Tooltip, TooltipProps } from ".";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => (
  <div style={{ marginTop: 30 }}>
    <Tooltip {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  content: "Text",
  isTooltipShownOnOverflowOnly: true,
  positionRight: true,
};
