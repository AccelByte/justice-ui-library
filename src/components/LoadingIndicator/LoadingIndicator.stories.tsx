/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Meta, Story } from "@storybook/react/types-6-0";
import { LoadingIndicator, LoadingIndicatorProps } from "./LoadingIndicator";

export default {
  title: "Components/Loading/LoadingIndicator",
  component: LoadingIndicator,
} as Meta;

const Template: Story<LoadingIndicatorProps> = (args) => <LoadingIndicator {...args} />;

export const Example = Template.bind({});
Example.args = {
  size: "normal",
  dataQA: "data QA"
};
