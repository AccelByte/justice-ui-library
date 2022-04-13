/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Meta, Story } from "@storybook/react/types-6-0";
import { Accordion, AccordionProps } from ".";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = (args) => (
  <div style={{maxWidth: 300}}>
    <Accordion {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = { title: "Accordion Title", children: <p>Accordion Body</p>, className: "some-classname", dataQa: "accordion-qa" };
