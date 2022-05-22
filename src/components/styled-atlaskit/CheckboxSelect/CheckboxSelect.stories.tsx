/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { CheckboxSelect, CheckboxSelectProps } from ".";
import { SelectOption } from "../../../types";

export default {
  title: "Components/Select/CheckboxSelect",
  component: CheckboxSelect,
} as Meta;

const Template: Story<CheckboxSelectProps> = (args) => {
  const [option, setOption] = React.useState<SelectOption[] | null>(args.value);
  const onChange = (option: SelectOption[]) => {
    setOption(option);
  };

  React.useEffect(() => {
    setOption(args.value);
  }, [args.value]);

  return <CheckboxSelect {...args} value={option} onChange={onChange} />;
};

export const Example = Template.bind({});
const selectOptions = [
  { label: "Value 1", value: "value1" },
  { label: "Value 2", value: "value2" },
  { label: "Value 3", value: "value3" },
  { label: "Value 4", value: "value4" },
  { label: "Value 5", value: "value5" },
];
Example.args = {
  value: selectOptions.slice(0, 2),
  options: selectOptions,
  replacementText: "Please select...",
};
