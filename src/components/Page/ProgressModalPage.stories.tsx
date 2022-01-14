/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ProgressModalPage, ProgressModalPageProps } from "./ProgressModalPage";
import "../../styles/icons/ab_icons.css";

export default {
  title: "Components/Page/ProgressModalPage",
  component: ProgressModalPage,
} as Meta;

const Template: Story<ProgressModalPageProps> = (args) => <ProgressModalPage {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: "Progress Indicator Title",
  step: 2,
  stepLabels: ["Step 1", "Step 2", "Step 3"],
  // @ts-ignore
  children: <p>Some children component</p>,
  onClose: () => console.log("the page is closed"),
};
