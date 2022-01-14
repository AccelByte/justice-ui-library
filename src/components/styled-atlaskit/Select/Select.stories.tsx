/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Select, SelectProps } from "./Select";
import { SelectOption } from "../../../types";

export default {
  title: "Components/Select",
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => {
  const [option, setOption] = React.useState<SelectOption>(args.value);
  const onChange = (option: SelectOption) => {
    setOption(option);
  };

  React.useEffect(() => {
    setOption(args.value)
  }, [args.value])
  return <Select {...args} value={option} onChange={onChange} />;
};

export const Example = Template.bind({});
Example.args = {
  value: { label: "Value 1", value: "value1" },
  options: [
    { label: "Value 1", value: "value1" },
    { label: "Value 2", value: "value2" },
  ],
};
