/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { SelectAsync, SelectAsyncProps } from ".";
import { SelectOption } from "../../types";

export default {
  title: "Components/SelectAsync",
  component: SelectAsync,
} as Meta;

const Template: Story<SelectAsyncProps> = (args) => {
  const [option, setOption] = React.useState<SelectOption>(args.value);
  const onChange = (option: SelectOption) => {
    setOption(option);
  };

  React.useEffect(() => {
    setOption(args.value);
  }, [args.value]);
  return <SelectAsync {...args} value={option} onChange={onChange} />;
};

export const Example = Template.bind({});
Example.args = {
  value: { label: "Value 1", value: "value1" },
  options: [
    { label: "Value 1", value: "value1" },
    { label: "Value 2", value: "value2" },
    { label: "Value 3", value: "value3" },
    { label: "Value 4", value: "value4" },
    { label: "Value 5", value: "value5" },
    { label: "Value 6", value: "value6" },
    { label: "Value 7", value: "value7" },
    { label: "Value 8", value: "value8" },
    { label: "Value 9", value: "value9" },
  ],
};
