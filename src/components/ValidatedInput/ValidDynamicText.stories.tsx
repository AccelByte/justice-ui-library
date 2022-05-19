/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ValidDynamicText, ValidDynamicTextProps } from "./ValidDynamicText";

export default {
  title: "Components/ValidatedInput/ValidDynamicText",
  component: ValidDynamicText,
} as Meta;

const Template: Story<ValidDynamicTextProps> = (args) => {
  const [values, setValues] = React.useState<string[]>(args.values);

  const onChange = (value: string[]) => setValues(value);

  React.useEffect(() => {
    setValues(args.values);
  }, [args.values]);

  React.useEffect(() => {
    setValues(args.values.slice(0, args.maxField));
  }, [args.maxField]);

  return <ValidDynamicText {...args} {...{ values, onChange }} />;
};

export const Example = Template.bind({});
Example.args = {
  label: "Field Label",
  placeholder: "Field placeholder",
  name: "field-name",
  values: ["first", "second", "third"],
  onChange: (values: string[]) => {
    console.log(values);
  },
  type: "text",
  maxField: 5,
  addText: "Add",
};
