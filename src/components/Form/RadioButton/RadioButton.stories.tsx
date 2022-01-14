/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { RadioButton, RadioButtonProps } from ".";
import { SelectOption } from "../../../types";

export default {
  title: "Components/Form/RadioButton",
  component: RadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = (args) => {
  const [option, setOption] = React.useState<SelectOption<string | boolean>>(args.selectedRadio);

  const onOptionChange = (option: SelectOption<string | boolean>) => {
    setOption(option);
  };

  React.useEffect(() => {
    setOption(args.selectedRadio)
  }, [args.selectedRadio])

  return <RadioButton {...args} selectedRadio={option} onChange={onOptionChange} />;
};

export const Example = Template.bind({});
Example.args = {
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ],
  selectedRadio: { label: "Option 1", value: "option1" },
  isHorizontal: true,
};
