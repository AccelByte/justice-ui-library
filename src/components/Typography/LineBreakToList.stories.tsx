/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { LineBreakToList, LineBreakToListProps } from "./LineBreakToList";

export default {
  title: "Components/LineBreakToList",
  component: LineBreakToList,
} as Meta;

const Template: Story<LineBreakToListProps> = (args) => <LineBreakToList {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: 'Alphanumeric, lowercase, and uppercase characters are allowed\nDisplay name must start and end with alphanumeric character\nSpaces, and special characters <code class="allow">\',. -</code> are allowed but cannot appear twice in a row',
};
