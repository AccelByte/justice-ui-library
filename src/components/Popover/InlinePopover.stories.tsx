/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { InlinePopover, InlinePopoverProps } from "./InlinePopover";
import { ValidFieldText } from "../ValidatedInput/ValidFieldText";

export default {
  title: "Components/InlinePopover",
  component: InlinePopover,
} as Meta;

const Template: Story<InlinePopoverProps> = (args) => <InlinePopover {...args} />;

export const Default = Template.bind({});

Default.args = {
  isOpen: false,
  content: "popOver example here",
  children: (
    <div style={{ width: "50%" }}>
      <ValidFieldText label={"popOver example: "} name={"popover-example"} value={""} onChange={() => {}} />
    </div>
  ),
};
