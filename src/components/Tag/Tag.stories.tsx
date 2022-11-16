/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Meta, Story } from "@storybook/react/types-6-0";
import {Tag, TagsProps} from "./Tag";

export default {
  title: "Components/Tag",
  component: Tag,
} as Meta;

const Template: Story<TagsProps> = (args) => <Tag {...args} />;

export const Example = Template.bind({});
Example.args = { text: "My tag", isRemovable: true, appearance: "default", dataQa: "data QA" };
