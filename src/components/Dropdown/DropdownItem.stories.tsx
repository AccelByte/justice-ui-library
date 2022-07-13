/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Meta, Story } from "@storybook/react/types-6-0";
import { DropdownItem, ButtonDropdown, DropdownItemProps } from ".";
import "../../styles/icons/fa_icons.css";

export default {
  title: "Components/Dropdown/DropdownItem",
  component: DropdownItem,
} as Meta;

const Template: Story<DropdownItemProps> = (args) => {
  return (
    <div style={{ fontFamily: "Roboto" }}>
      <ButtonDropdown trigger="Dropdown" buttonAppearance="subtle" defaultOpen>
        <DropdownItem {...args} />
      </ButtonDropdown>
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  children: "Dropdown Item",
  description: "Dropdown description",
  autoFocus: false,
  elemBefore: <i className="fa-icon-calendar" style={{ marginRight: 8 }} />,
  elemAfter: <i className="fa-icon-trash" style={{ marginLeft: 8 }} />,
};
