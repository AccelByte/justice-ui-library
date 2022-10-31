/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { SelectAsync, SelectAsyncProps } from "./SelectAsync";
import { SelectOption } from "../../types";

export default {
  title: "Components/SelectAsync",
  component: SelectAsync,
} as Meta;

const Template: Story<SelectAsyncProps> = (args) => {
  const [option, setOption] = React.useState<SelectOption>(args.value);
  const onChange = (option: SelectOption) => {
    setOption(option);
  };

  const [asyncOptions, setAsyncOption] = React.useState<SelectOption[]>([]);

  const options: SelectOption[] = React.useMemo(() => {
    const options: SelectOption[] = [];
    for (let i = 0; i < 50; ++i) {
      options.push({
        value: `${i + 1}`,
        label: `Option ${i + 1}`,
      });
    }
    return options;
  }, []);

  const sleep = (ms: number): Promise<void> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });

  const loadMoreOptions = async (keyword: string, offset: number) => {
    await sleep(1000);

    let filteredOptions: SelectOption[] = [];
    if (!keyword) {
      filteredOptions = options;
    } else {
      const searchLower = keyword.toLowerCase();

      filteredOptions = options.filter(({ label }) => label.toLowerCase().includes(searchLower));
    }

    const slicedOptions = filteredOptions.slice(offset, offset + 10);
    setAsyncOption(slicedOptions)

    return slicedOptions;
  };

  const loadOptions = (keyword: string) => loadMoreOptions(keyword, 0);

  React.useEffect(() => {
    setOption(args.value);
  }, [args.value]);
  return (
    <SelectAsync
      {...args}
      options={asyncOptions}
      value={option}
      onChange={onChange}
      loadOptions={loadOptions}
      onLoadMoreOptions={loadMoreOptions}
      defaultOptions
    />
  );
};

export const Example = Template.bind({});
Example.args = {
  value: { label: "Value 1", value: "value1" },
};
