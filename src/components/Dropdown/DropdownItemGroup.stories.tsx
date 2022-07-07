/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Meta, Story } from "@storybook/react/types-6-0";
import { DropdownItemGroup, DropdownItem, DropdownItemGroupProps, ButtonDropdown } from ".";

export default {
  title: "Components/Dropdown/DropdownItemGroup",
  component: DropdownItemGroup,
} as Meta;

const Template: Story<DropdownItemGroupProps> = (args) => {
  return (
    <div style={{ fontFamily: "Roboto" }}>
      <ButtonDropdown trigger="Dropdown" buttonAppearance="subtle" defaultOpen>
        <DropdownItemGroup {...args} />
      </ButtonDropdown>
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  title: "Dropdown Group",
  children: (
    <>
      <DropdownItem key="1">Dropdown Item 1</DropdownItem>
      <DropdownItem key="2">Dropdown Item 2</DropdownItem>
    </>
  ),
  elemAfter: <i className="fa-icon-clipboard" style={{ marginLeft: 8 }} />,
};
