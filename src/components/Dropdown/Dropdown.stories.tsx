/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Meta, Story } from "@storybook/react/types-6-0";
import { DropdownMenu, DropdownItemGroup, DropdownItem, DropdownMenuProps } from "./Dropdown";

export default {
  title: "Components/Dropdown/DropdownMenu",
  component: DropdownMenu,
} as Meta;

const Template: Story<DropdownMenuProps> = (args) => {
  return (
    <div style={{ fontFamily: "Roboto" }}>
      <DropdownMenu {...args}>
        <DropdownItemGroup title="Dropdown Group 1">
          <DropdownItem key="1">Dropdown Item 1</DropdownItem>
          <DropdownItem key="2">Dropdown Item 2</DropdownItem>
        </DropdownItemGroup>
        <DropdownItemGroup title="Dropdown Group 2">
          <DropdownItem key="3">Dropdown Item 3</DropdownItem>
          <DropdownItem key="4">Dropdown Item 4</DropdownItem>
        </DropdownItemGroup>
      </DropdownMenu>
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  trigger: "Dropdown",
  triggerType: "button",
  triggerButtonProps: { appearance: "subtle" },
  position: "bottom right",
  defaultOpen: true,
  shouldFlip: false,
  shouldFitContainer: true,
};
