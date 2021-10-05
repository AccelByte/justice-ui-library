/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Banner, APPEARANCE_TYPE, BannerProps } from ".";

export default {
  title: "Components/Banner",
  component: Banner,
} as Meta;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const Success = Template.bind({});
Success.args = { appearance: APPEARANCE_TYPE.success, message: "Success banner" };

export const Error = Template.bind({});
Error.args = { appearance: APPEARANCE_TYPE.error, message: "Error banner" };

export const Info = Template.bind({});
Info.args = { appearance: APPEARANCE_TYPE.info, message: "Info banner" };

export const Warning = Template.bind({});
Warning.args = { appearance: APPEARANCE_TYPE.warning, message: "Warning banner" };
