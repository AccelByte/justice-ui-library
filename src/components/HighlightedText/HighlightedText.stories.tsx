/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { HighlightedText, HighlightedTextProps } from ".";

export default {
  title: "Components/HighlightedText",
  component: HighlightedText,
} as Meta;

const Template: Story<HighlightedTextProps> = (args) => <HighlightedText {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: "Some highlighted text",
  highlight: "highlighted",
};
