/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Card, CardProps } from ".";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Example = Template.bind({});
Example.args = {
  cardTitle: "card title",
  cardSubTitle: "card subtitle",
  children: "card component example. you can customize further by running `yarn storybook`",
  buttonText: "card button",
  buttonIcon: "fa-icon-search",
  buttonOnClick: () => {
    console.log("clicked");
  },
  customFooter: <p>this is a custom footer</p>,
};
