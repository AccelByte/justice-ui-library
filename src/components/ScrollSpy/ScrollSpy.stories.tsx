/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ScrollSpy, ScrollSpyProps } from "./index";
import { Enum } from "../../types";

export default {
  title: "Components/ScrollSpy",
  component: ScrollSpy,
} as Meta;

const ExampleItemsEnum = Enum("First", "Second", "Third");

const Template: Story<ScrollSpyProps> = (args) => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <ScrollSpy {...args} />
    <main style={{ marginLeft: 16, width: "70%", maxWidth: 1000, fontFamily: "Roboto" }}>
      <section id="first" style={{ height: 500, marginBottom: 20, backgroundColor: "#eff5ff", padding: 20 }}>
        First section
      </section>
      <section id="second" style={{ height: 500, marginBottom: 20, backgroundColor: "#8dbaff", padding: 20 }}>
        Second section
      </section>
      <section id="third" style={{ height: 500, marginBottom: 20, backgroundColor: "#4c93ff", padding: 20 }}>
        Third section
      </section>
    </main>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: Object.keys(ExampleItemsEnum).map((field) => ({
    elementId: field.toLowerCase(),
    text: field,
  })),
  className: "example-classname",
};
