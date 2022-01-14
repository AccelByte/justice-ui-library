/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ValidFieldTextArea, ValidFieldTextAreaProps } from "./ValidFieldTextArea";

export default {
  title: "Components/ValidatedInput/ValidFieldTextArea",
  component: ValidFieldTextArea,
} as Meta;

export const Example: Story<ValidFieldTextAreaProps> = (args) => {
  const [exampleValue, setExampleValue] = React.useState<string>(args.value);

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setExampleValue(value);
  };

  React.useEffect(() => {
    setExampleValue(args.value);
  }, [args.value]);

  // @ts-ignore
  return <ValidFieldTextArea {...args} value={exampleValue} onChange={handleOnChange} />
};

Example.args = {
  placeholder: "Field Placeholder",
  type: "text",
  value: "Example Value",
  label: "Field Label",
  name: "field-name",
  tooltip: "some tooltip",
  maxLength: 100
};
