/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import { BreadcrumbSchema, Enum } from "../../../types";
import { CONTAINER_SIZE } from "../../../constants";
import Badge, { BadgeProps } from "../../Badge";
import "./index.scss";
import "../../../styles/icons/index.scss";

export interface BreadcrumbProps {
  breadcrumbLists: BreadcrumbSchema[];
  pageTitle: string;
  pageTitleBadge?: BadgeProps;
  containerSize?: Enum<typeof CONTAINER_SIZE>;
  className?: string;
}

export class Breadcrumb extends React.Component<BreadcrumbProps> {
  render() {
    const {
      breadcrumbLists,
      pageTitle,
      containerSize = CONTAINER_SIZE.FULLWIDTH,
      className,
      pageTitleBadge,
    } = this.props;
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
      >
        <div className="wrapper">
          <ul className="breadcrumb-nav">
            {breadcrumbLists.map((item, key: number) => {
              return (
                <li key={key} className="breadcrumb-nav__item">
                  {item.onClick && (
                    <span onClick={item.onClick} className={"breadcrumb-nav__item__link"}>
                      {useBackButton && <i className="back-button-icon icon-ab-arrow-left" />}
                      {item.text}
                    </span>
                  )}
                  {key !== lastItemKey && <span className="item-separator">/</span>}
                  {!item.onClick && <span className={"breadcrumb-nav__item__no-link"}>{item.text}</span>}
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
  }
}
