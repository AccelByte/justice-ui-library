/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { TableFilter, TableFilterProps } from ".";

export default {
  title: "Components/TableFilter",
  component: TableFilter,
} as Meta;

const Template: Story<TableFilterProps> = (args) => <TableFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentValue: { label: "label 1", value: "label1" },
  options: [
    { label: "label 1", value: "label1" },
    { label: "label 2", value: "label2" },
  ],
};
