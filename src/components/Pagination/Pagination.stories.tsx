/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Pagination, PaginationProps } from ".";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;

const limitOptions = [{ label: "10", value: "10" }];
const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Example = Template.bind({});
export const ExampleWithLimit = Template.bind({});
Example.args = {
  paging: { previous: "/prev" },
};

ExampleWithLimit.args = {
  paging: { previous: "/prev" },
  limit: {
    options: limitOptions,
    value: limitOptions[0],
    onChange: () => {},
  },
};
