/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import {ValidMultiCreatableFieldText, ValidMultiCreatableFieldTextProps} from "./ValidMultiCreatableFieldText"
import { SelectOption } from "../../types";

export default {
  title: "Components/ValidatedInput/ValidMultiCreatableFieldText",
  component: ValidMultiCreatableFieldText,
} as Meta;

const Template: Story<ValidMultiCreatableFieldTextProps> = (args) => {
  const [option, setOption] = React.useState<SelectOption[]>(args.value);
  const onChange = (option: SelectOption[]) => {
    if (option) setOption(option);
  };

  React.useEffect(() => {
    setOption(args.value as SelectOption[]);
  }, [args.value]);
  return <ValidMultiCreatableFieldText {...args} value={option} onChange={onChange} />;
};

export const Example = Template.bind({});
Example.args = {
  label: "label",
  value: [{
    label: "Value 1",
    value: "value1"
  }],
};
