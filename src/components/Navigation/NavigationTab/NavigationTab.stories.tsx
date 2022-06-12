/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { NavigationTab, NavigationTabProps } from ".";

export default {
  title: "Components/Navigation/NavigationTab",
  component: NavigationTab,
  argTypes: {
    config: {
      table: {
        type: {
          summary: "ItemTab[]",
          detail: `
          {
            tabName: string;
            url: string;
            isActive: boolean;
            dataQa?: string | null;
            dataQaProps?: string | null;
            id?: string;
        }[]`,
        },
      },
    },
  },
} as Meta;

const Template: Story<NavigationTabProps> = (args) => {
  const [activeTab, setActiveTab] = React.useState<string>("tab1");

  const tabConfig = [
    { tabName: "Tab 1", url: "tab1", isActive: activeTab === "tab1" },
    { tabName: "Tab 2", url: "tab2", isActive: activeTab === "tab2" },
    { tabName: "Tab 3", url: "tab3", isActive: activeTab === "tab3" },
    { tabName: "Tab 4", url: "tab4", isActive: activeTab === "tab4" },
    { tabName: "Tab 5", url: "tab5", isActive: activeTab === "tab5" },
    { tabName: "Tab 6", url: "tab6", isActive: activeTab === "tab6" },
  ];

  return <NavigationTab {...args} config={tabConfig} changePageKey={setActiveTab} />;
};

export const Example = Template.bind({});
Example.args = {
  isChangeRoute: false,
};
