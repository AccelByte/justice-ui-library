/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Box, BoxProps } from "./Box";

export default {
  title: "Components/Box",
  component: Box,
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Example = Template.bind({});
Example.args = { title: "Box title", children: "Box children", dataQA: "Data QA" };
