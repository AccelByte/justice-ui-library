/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Checkbox, CheckboxProps } from ".";

export default {
  title: "Components/Form/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(args.isChecked);

  const onChange = () => setIsChecked((prevState) => !prevState);

  React.useEffect(() => {
    setIsChecked(args.isChecked);
  }, [args.isChecked]);

  return <Checkbox {...args} isChecked={isChecked} onChange={onChange} />;
};

export const Example = Template.bind({});
Example.args = {
  label: "Checkbox label",
  isChecked: true,
  helperText: "Some helper text",
  tooltip: "Some tooltip",
  isDisabled: false,
};
