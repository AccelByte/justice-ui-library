/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { PropsWithChildren } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Page, PageProps } from ".";

export default {
  title: "Components/Page",
  component: Page,
} as Meta;

const Template: Story<PropsWithChildren<PageProps>> = (args) => <Page {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: "Page title",
  children: "Page content",
};
