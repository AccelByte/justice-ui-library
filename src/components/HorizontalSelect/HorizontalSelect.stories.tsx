/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { HorizontalSelect, HorizontalSelectProps } from "./HorizontalSelect";

export default {
  title: "Components/HorizontalSelect",
  component: HorizontalSelect,
  argTypes: {
    options: {
      table: {
        type: {
          summary: "SelectOption<T>[]",
          detail: `
          {
            label: string;
            value: T;
        }[]`,
        },
      },
    },
  },
} as Meta;

const Template: Story<HorizontalSelectProps<string>> = (args) => {
  const [value, setValue] = React.useState<string>(args.value);

  const onValueChange = (value: string) => setValue(value);

  React.useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return <HorizontalSelect {...args} value={value} onChange={onValueChange} />;
};

export const Example = Template.bind({});
Example.args = {
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ],
  value: "option1",
};
