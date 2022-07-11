/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { ChangeEvent } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { PureSearchPanel, PureSearchPanelProps } from ".";

export default {
  title: "Components/PureSearchPanel",
  component: PureSearchPanel,
} as Meta;

const Template: Story<PureSearchPanelProps> = (args) => {
  const [value, setValue] = React.useState(args.value);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return <PureSearchPanel {...args} value={value} onChange={onChange} />;
};

export const Default = Template.bind({});

Default.args = {
  value: "search value",
  placeholder: "Search something",
  onSearch: () => console.log("Searching..."),
};
