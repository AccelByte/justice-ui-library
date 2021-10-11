/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ButtonWithIcon, ButtonWithIconProps } from ".";

export default {
  title: "Components/ButtonWithIcon",
  component: ButtonWithIcon,
} as Meta;

const Template: Story<ButtonWithIconProps> = (args) => <ButtonWithIcon {...args} />;

export const Example = Template.bind({});
Example.args = { appearance: "subtle", buttonIcon: "fa-icon-plus", children: "Add something" };
