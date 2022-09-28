/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { SelectWithLogo, SelectItemWithLogo, SelectWithLogoProps } from "./SelectWithLogo";

export default {
  title: "Components/SelectWithLogo",
  component: SelectWithLogo,
} as Meta;

const Template: Story<SelectWithLogoProps> = (args) => {
  const [option, setOption] = React.useState<SelectItemWithLogo>(args.value as SelectItemWithLogo);
  const onChange = (option: SelectItemWithLogo | null) => {
    if (option) setOption(option);
  };

  React.useEffect(() => {
    setOption(args.value as SelectItemWithLogo);
  }, [args.value]);
  return <SelectWithLogo {...args} value={option} onChange={onChange} />;
};

export const Example = Template.bind({});
Example.args = {
  value: {
    label: "Value 1",
    value: "value1",
    logo: (
      <img
        src="https://2459647.fs1.hubspotusercontent-na1.net/hubfs/2459647/aa758ae3-8bbf-4db5-8fb7-24fc68692c5d.png"
        height="32px"
      />
    ),
  },
  options: [
    {
      label: "group1",
      options: [
        {
          label: "Value 1",
          value: "value1",
          logo: (
            <img
              src="https://2459647.fs1.hubspotusercontent-na1.net/hubfs/2459647/aa758ae3-8bbf-4db5-8fb7-24fc68692c5d.png"
              height="32px"
            />
          ),
        },
      ],
    },
    {
      label: "group2",
      options: Array(50).fill("").map((_, index) => ({
            label: `Value ${index + 2}`,
            value: `value${index + 2}`,
            logo: (
              <img
                src="https://2459647.fs1.hubspotusercontent-na1.net/hubfs/2459647/aa758ae3-8bbf-4db5-8fb7-24fc68692c5d.png"
                height="32px"
              />
            ),
          }))
    },
  ],
};
