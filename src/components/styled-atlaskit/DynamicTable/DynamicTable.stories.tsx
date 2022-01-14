/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { DynamicTable, DynamicTableProps } from "./DynamicTable";

export default {
  title: "Components/DynamicTable",
  component: DynamicTable,
} as Meta;

const Template: Story<DynamicTableProps> = (args) => <DynamicTable {...args} />;

export const Example = Template.bind({});
Example.args = {
  head: {
    cells: [
      {
        key: "col1",
        content: "Column 1",
      },
      {
        key: "col2",
        content: "Column 2",
      },
    ],
  },
  rows: [
    {
      key: "row1",
      cells: [
        { key: "row1cell1", content: "Row 1-Column 1" },
        { key: "row1cell2", content: "Row 1-Column 2" },
      ],
    },
    {
      key: "row2",
      cells: [
        { key: "row2cell1", content: "Row 2-Column 1" },
        { key: "row2cell2", content: "Row 2-Column 2" },
      ],
    },
  ],
  children: <p>Some text below the table</p>,
  customContent: <span>Some optional custom content above the table</span>
};
