/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    className: {
      name: "className",
      description:
        "Add a classname to the button. You can set it to `danger` or `success` when the `appearance` is either `outline` or `subtle` to turn the button red or green respectively",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "Primary", appearance: "primary" };

export const Subtle = Template.bind({});
Subtle.args = { children: "Subtle", appearance: "subtle" };

export const Danger = Template.bind({});
Danger.args = { children: "Danger", appearance: "danger" };

export const Link = Template.bind({});
Link.args = { children: "Link", appearance: "link" };
