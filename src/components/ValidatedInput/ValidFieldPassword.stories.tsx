/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ValidFieldPasswordProps, ValidFieldPassword } from "./ValidFieldPassword";

export default {
  title: "Components/ValidatedInput/ValidFieldPassword",
  component: ValidFieldPassword,
} as Meta;

export const Example: Story<ValidFieldPasswordProps> = (args) => {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <ValidFieldPassword {...args} value={value} onChange={handleOnChange} />;
};

Example.args = {
  passHideText: "View Password",
  passVisibleText: "Hide Password",
  label: "Field Label",
  name: "Field password",
  defaultGenerateText: "Generate password",
  placeholder: "Field Placeholder",
};
