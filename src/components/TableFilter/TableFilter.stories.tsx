/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { TableFilter, TableFilterProps } from "./TableFilter";
import { SelectOption } from "../../types";

export default {
  title: "Components/TableFilter",
  component: TableFilter,
  argTypes: {
    options: {
      table: {
        type: {
          summary: "SelectOption<string>[]",
          detail: `
          {
            label: string;
            value: string;
        }[]`,
        },
      },
    },
    currentValue: {
      table: {
        type: {
          summary: "SelectOption<string>",
          detail: `
          {
            label: string;
            value: string;
        }`,
        },
      },
    },
  },
} as Meta;

const Template: Story<TableFilterProps> = (args) => {
  const [value, setValue] = React.useState<SelectOption>(args.options[0]);

  const onChange = (option: SelectOption) => {
    setValue(option);
  };

  React.useEffect(() => {
    setValue(args.currentValue);
  }, [args.currentValue]);

  return <TableFilter {...args} currentValue={value} onFilterChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {
  currentValue: { label: "label 1", value: "label1" },
  options: [
    { label: "label 1", value: "label1" },
    { label: "label 2", value: "label2" },
  ],
};
