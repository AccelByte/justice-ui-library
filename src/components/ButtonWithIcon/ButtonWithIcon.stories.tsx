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
  argTypes: {
    className: {
      name: "className",
      description:
        "Add a classname to the button. You can set it to `danger` or `success` when the `appearance` is either `outline` or `subtle` to turn the button red or green respectively",
    },
  },
} as Meta;

const Template: Story<ButtonWithIconProps> = (args) => <ButtonWithIcon {...args} />;

export const Example = Template.bind({});
Example.args = { appearance: "subtle", buttonIcon: "fa-icon-plus", children: "Add something" };
