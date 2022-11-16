/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Meta, Story } from "@storybook/react/types-6-0";
import { ErrorWrapper, ErrorWrapperProps } from "./ErrorWrapper";
import logo from "../../assets/headerLogo.svg";

export default {
  title: "Components/ErrorWrapper",
  component: ErrorWrapper,
} as Meta;

const Template: Story<ErrorWrapperProps> = (args) => <ErrorWrapper {...args} />;

export const Example = Template.bind({});
Example.args = {
  image: logo,
  title: "Title",
  subTitle: "Subtitle",
  dataQa: "data QA"
};
