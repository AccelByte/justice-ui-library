/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { TextField, TextFieldProps } from ".";

export default {
  title: "Components/TextField",
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args) => {
  const [value, setValue] = React.useState<string | number>(args.value || "");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    setValue(event.target.value);
  };

  React.useEffect(() => {
    setValue(args.value || "");
  }, [args.value]);

  return <TextField {...args} value={value} onChange={onChange} />;
};

export const Example = Template.bind({});
Example.args = {
  value: "some value",
};
