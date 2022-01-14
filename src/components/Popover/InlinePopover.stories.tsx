/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { InlinePopover, InlinePopoverProps } from "./InlinePopover";

export default {
  title: "Components/Popover/InlinePopover",
  component: InlinePopover,
} as Meta;

const Template: Story<InlinePopoverProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <InlinePopover {...args} isOpen={isOpen}>
      <span onClick={togglePopover}>Click here to toggle the popover</span>
    </InlinePopover>
  );
};

export const Default = Template.bind({});

Default.args = {
  content: "inline popover content",
  type: "dark",
};
