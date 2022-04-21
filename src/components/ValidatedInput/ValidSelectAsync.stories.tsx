/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ValidSelectAsync, ValidSelectAsyncProps } from "./ValidSelectAsync";
import { SelectOption } from "../../types";

export default {
  title: "Components/ValidatedInput/ValidSelectAsync",
  component: ValidSelectAsync,
} as Meta;

const Template: Story<ValidSelectAsyncProps<number, any, any, boolean>> = (args) => {
  const [option, setOption] = React.useState<SelectOption | null>(null);

  const options: SelectOption<number>[] = React.useMemo(() => {
    const options = [];
    for (let i = 0; i < 50; ++i) {
      options.push({
        value: i + 1,
        label: `Option ${i + 1}`,
      });
    }
    return options;
  }, []);

  const onChange = (option: SelectOption) => {
    setOption(option);
  };

  const sleep = (ms: number): Promise<void> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });

  const loadOptions = async (search: string, prevOptions: SelectOption<number>[]) => {
    await sleep(1000);

    let filteredOptions;
    if (!search) {
      filteredOptions = options;
    } else {
      const searchLower = search.toLowerCase();

      filteredOptions = options.filter(({ label }) => label.toLowerCase().includes(searchLower));
    }

    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(prevOptions.length, prevOptions.length + 10);

    return {
      hasMore,
      options: slicedOptions,
    };
  };

  return <ValidSelectAsync {...args} onChange={onChange} loadOptions={loadOptions} />;
};

export const Example = Template.bind({});
Example.args = {
  label: "Label",
  placeholder: "Select please...",
};
