/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { NoResultTip, NoResultTipProps } from ".";

export default {
  title: "Components/NoResultTip",
  component: NoResultTip,
} as Meta;

const Template: Story<NoResultTipProps> = (args) => <NoResultTip {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: "No result found",
  primaryText: "Sorry, there is no result found",
  secondaryText: "Secondary",
};
