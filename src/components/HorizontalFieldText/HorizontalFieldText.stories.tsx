/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Meta, Story } from "@storybook/react/types-6-0";
import { HorizontalFieldText, HorizontalFieldTextProps } from "./HorizontalFieldText";
import { Card } from "../Card/Card";

export default {
  title: "Components/HorizontalFieldText",
  component: HorizontalFieldText,
} as Meta;

const Template: Story<HorizontalFieldTextProps> = (args) => (
  <Card smallCard noTitle>
    <div className="styled-information-table">
      <HorizontalFieldText {...args} />
    </div>
  </Card>
);

export const Example = Template.bind({});
Example.args = {
  label: "Label",
  tooltip: "Some tooltip",
  children: "Horizontal Field Text",
};
