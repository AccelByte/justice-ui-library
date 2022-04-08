/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Meta, Story } from "@storybook/react/types-6-0";
import { Badge, BadgeProps, BADGE_APPEARANCE, BADGE_SIZE, BADGE_TYPE } from ".";

export default {
  title: "Components/Badge",
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = { text: "Badge", appearance: BADGE_APPEARANCE.SUCCESS, type: BADGE_TYPE.LIGHT, size: BADGE_SIZE.MEDIUM };
