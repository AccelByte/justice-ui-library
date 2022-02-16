/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { StyledToggleProps, StyledToggle } from ".";

export default {
  title: "Components/StyledToggle",
  component: StyledToggle,
} as Meta;

const Template: Story<StyledToggleProps> = (args) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(args.isChecked || false);

  const toggleChecked = () => {
    setIsChecked((prevState) => !prevState);
  };

  React.useEffect(() => {
    setIsChecked(args.isChecked || false)
  }, [args.isChecked])

  return <StyledToggle {...args} isChecked={isChecked} onChange={toggleChecked} />;
};

export const Default = Template.bind({});
Default.args = {
  activeText: "Active",
  inactiveText: "Inactive",
  isEditable: true,
  isChecked: true
};
