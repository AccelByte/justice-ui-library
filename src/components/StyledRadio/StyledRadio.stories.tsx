/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { StyledRadio, StyledRadioProps } from "./StyledRadio";
import { RadioOption } from "../../types";

export default {
  title: "Components/StyledRadio",
  component: StyledRadio,
  argTypes: {
    options: {
      table: {
        type: {
          summary: "RadioOption<string | boolean>[]",
          detail: `
          {
            label: string;
            value: string | boolean;
            helper?: string;
            customChild?: React.ReactNode;
        }[]`,
        },
      },
    },
  },
} as Meta;

const Template: Story<StyledRadioProps> = (args) => {
  const [value, setValue] = React.useState<string | boolean>(args.selectedRadio);

  const onChange = (item: RadioOption<string | boolean>) => {
    setValue(item.value);
  };

  React.useEffect(() => {
    setValue(args.selectedRadio);
  }, [args.selectedRadio]);

  return <StyledRadio {...args} selectedRadio={value} onChange={onChange} />;
};

export const Example = Template.bind({});
Example.args = {
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ],
  label: "Radio Label",
  selectedRadio: "option1",
};
