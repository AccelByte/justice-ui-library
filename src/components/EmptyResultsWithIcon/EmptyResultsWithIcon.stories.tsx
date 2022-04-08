/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Meta, Story } from "@storybook/react/types-6-0";
import { EmptyResultsProps, EmptyResultsWithIcon } from ".";
import logo from "../../assets/headerLogo.svg";

export default {
  title: "Components/EmptyResultsWithIcon",
  component: EmptyResultsWithIcon,
} as Meta;

const Template: Story<EmptyResultsProps> = (args) => <EmptyResultsWithIcon {...args} />;

export const Example = Template.bind({});
Example.args = {
  imgSrc: logo,
  title: "Empty Result",
  description: "There is no result",
};
