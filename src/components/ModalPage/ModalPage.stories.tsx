/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { PropsWithChildren } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ModalPage, ModalPageProps } from "./ModalPage";

export default {
  title: "Components/ModalPage",
  component: ModalPage,
} as Meta;

const Template: Story<PropsWithChildren<ModalPageProps>> = (args) => <ModalPage {...args} />;

export const Example = Template.bind({});
Example.args = {
  isFullWidth: true,
  isFlex: true,
  children: "modal page",
};
