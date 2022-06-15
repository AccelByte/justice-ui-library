/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { default as classNames } from "classnames";
import { BreadcrumbSchema, Enum } from "../../../types";
import { CONTAINER_SIZE } from "../../../constants";
import { Badge, BadgeProps } from "../../Badge";
import "./index.scss";

export interface BreadcrumbProps {
  breadcrumbLists: BreadcrumbSchema[];
  pageTitle: string;
  pageTitleBadge?: BadgeProps;
  containerSize?: Enum<typeof CONTAINER_SIZE>;
  className?: string;
  renderLink?: (item: BreadcrumbSchema, useBackButton: boolean) => JSX.Element;
  dataQa?: string | null;
}

export const Breadcrumb = ({
  breadcrumbLists,
  pageTitle,
  containerSize = "FULLWIDTH",
  className,
  pageTitleBadge,
  renderLink,
  dataQa,
}: BreadcrumbProps) => {
  const lastItemKey = breadcrumbLists.length - 1;
  const useBackButton = breadcrumbLists.length === 1;
  return (
    <div
      className={classNames(
        "breadcrumb-nav-container",
        containerSize === CONTAINER_SIZE.SMALL && "breadcrumb-nav-container--small",
        containerSize === CONTAINER_SIZE.LARGE && "breadcrumb-nav-container--large",
        containerSize === CONTAINER_SIZE.FULLWIDTH && "breadcrumb-nav-container--full",
        className
      )}
      data-qa-id={dataQa}
    >
      <div className="wrapper">
        <ul className="breadcrumb-nav">
          {breadcrumbLists.map((item, key: number) => {
            return (
              <li key={key} className="breadcrumb-nav__item">
                {item.onClick && !item.link && (
                  <span onClick={item.onClick} className={"breadcrumb-nav__item__link"}>
                    {useBackButton && <i className="back-button-icon icon-ab-arrow-left" />}
                    {item.text}
                  </span>
                )}
                {item.link && !item.onClick && renderLink && renderLink(item, useBackButton)}
                {key !== lastItemKey && (
                  <span className="item-separator">
                    <i className={"fa-icon-chevron-right"} />
                  </span>
                )}
                {!item.onClick && !item.link && <span className={"breadcrumb-nav__item__no-link"}>{item.text}</span>}
              </li>
            );
          })}
        </ul>
        <div className="page-title">
          {pageTitle}
          {pageTitleBadge && <Badge {...pageTitleBadge} className={"page-title-badge"} />}
        </div>
      </div>
    </div>
  );
};
