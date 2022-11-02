/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Select, SelectProps } from "./Select";
import { SelectOption } from "../../types";

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
    setOption(args.value);
  }, [args.value]);
  return (
    <div style={{ width: 300 }}>
      <Select {...args} value={option} onChange={onChange} />
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  value: { label: "Value 1", value: "value1" },
  options: [
    { label: "Value 1", value: "value1" },
    { label: "Value 2 and it is so unusually looooooooooooooooooooooooooooooooooooooooooooooong", value: "value2" },
    { label: "Value 3", value: "value3" },
    { label: "Value 4", value: "value4" },
    { label: "Value 5", value: "value5" },
    { label: "Value 6", value: "value6" },
    { label: "Value 7", value: "value7" },
    { label: "Value 8", value: "value8" },
    { label: "Value 9", value: "value9" },
    { label: "Value 10", value: "value10" },
    { label: "Value 11", value: "value11" },
    { label: "Value 12", value: "value12" },
    { label: "Value 13", value: "value13" },
    { label: "Value 14", value: "value14" },
    { label: "Value 15", value: "value15" },
    { label: "Value 16", value: "value16" },
    { label: "Value 17", value: "value17" },
    { label: "Value 18", value: "value18" },
    { label: "Value 19", value: "value19" },
  ],
};
