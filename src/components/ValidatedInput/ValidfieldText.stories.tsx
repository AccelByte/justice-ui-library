/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ValidFieldText, ValidFieldTextProps } from "./ValidFieldText";

export default {
  title: "Components/ValidatedInput/ValidFieldText",
  component: ValidFieldText,
} as Meta;

export const Example: Story<ValidFieldTextProps> = (args) => {
  const [exampleValue, setExampleValue] = React.useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setExampleValue(value);
  };

  React.useEffect(() => {
    setExampleValue(args.value);
  }, [args.value]);

  const componentArgs = {
    value: exampleValue,
    onChange: handleOnChange,
  };

  return <ValidFieldText {...args} {...componentArgs} />;
};

Example.args = {
  placeholder: "Field Placeholder",
  type: "text",
  value: "Example Value",
  label: "Field Label",
  name: "field-name",
  popoverContent: "popover content"
};
