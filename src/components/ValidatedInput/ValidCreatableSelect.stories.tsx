/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ValidSelectProps } from "./ValidSelect";
import { ValidCreatableSelect } from "./ValidCreatableSelect";
import { SelectOption } from "../../types";

export default {
  title: "Components/ValidatedInput/ValidCreatableSelect",
  component: ValidCreatableSelect,
} as Meta;

const Template: Story<ValidSelectProps> = (args) => {
  const [option, setOption] = React.useState<SelectOption | null>(null);
  const onChange = (option: SelectOption) => {
    setOption(option);
  };
  return <ValidCreatableSelect {...args} value={option} onChange={onChange} />;
};

export const Example = Template.bind({});
Example.args = {
  options: [
    { label: "Value 1", value: "value1" },
    { label: "Value 2", value: "value2" },
  ],
  label: "Label",
  placeholder: "Select please...",
};
