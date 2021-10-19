/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ScrollSpy, ScrollSpyProps } from "./index";
import { Enum } from "../../types";

export default {
  title: "Components/ScrollSpy",
  component: ScrollSpy,
} as Meta;

const ExampleItemsEnum = Enum("First", "Second", "Third");

const Template: Story<ScrollSpyProps> = (args) => <ScrollSpy {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: Object.keys(ExampleItemsEnum).map((field) => ({
    elementId: field,
    text: field,
  })),
  className: "example-classname",
};
