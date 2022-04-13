/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Meta, Story } from "@storybook/react/types-6-0";
import { Breadcrumb, BreadcrumbProps } from ".";
import { BreadcrumbSchema } from "../../../types";

export default {
  title: "Components/Navigation/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    pageTitleBadge: {
      table: {
        type: {
          summary: "BadgeProps",
          detail: `
          {
            text: string;
            appearance?: "INFO" | "INACTIVE" | "WARNING" | "ERROR" | "SUCCESS" | "GENERAL";
            type?: "BASIC" | "LIGHT" | "OUTLINE";
            size?: "SMALL" | "MEDIUM" | "LARGE";
            isSemibold?: boolean;
        }`,
        },
      },
    },
    breadcrumbLists: {
      table: {
        type: {
          summary: "BreadcrumbSchema[]",
          detail: `
          {
            text: string;
            onClick?: () => void;
            link?: string;
            dataQa?: string | null;
        }[]`,
        },
      },
    },
  },
} as Meta;

const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  pageTitle: "Page title",
  pageTitleBadge: { text: "Default", type: "BASIC", appearance: "SUCCESS" },
  breadcrumbLists: [
    { text: "Link 1", onClick: () => {} },
    { text: "Link 2", onClick: () => {} },
  ],
};

const renderLink = (item: BreadcrumbSchema, useBackButton: boolean) => (
  <a className="breadcrumb-nav__item__link" href={item.link}>
    {useBackButton && <i className="back-button-icon icon-ab-arrow-left" />}
    {item.text}
  </a>
);

export const WithLink = Template.bind({});
WithLink.args = {
  pageTitle: "Page title",
  pageTitleBadge: { text: "Badge", type: "LIGHT", appearance: "GENERAL" },
  breadcrumbLists: [{ text: "Link 1", link: "/link1" }],
  renderLink: renderLink,
};
