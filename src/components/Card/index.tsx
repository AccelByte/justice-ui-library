/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import classNames from "classnames";
import * as React from "react";
import { Button } from "../styled-atlaskit/Button/Button";
import ReactTooltip from "react-tooltip";
import "./index.scss";
import { ButtonAppearances } from "@atlaskit/button";

export interface CardProps {
  children: React.ReactNode;
  customFooter?: JSX.Element | null;
  customHeader?: React.ReactNode;
  cardTitle?: string;
  cardSubTitle?: string;
  cardInfo?: string;
  cardDataQa?: string | null;
  className?: string;
  buttonOnClick?: any;
  buttonText?: string;
  buttonIcon?: string;
  buttonDataQa?: string | null;
  buttonAppearance?: ButtonAppearances;
  buttonDisabled?: boolean;
  noPadding?: boolean;
  noHorizontalMargin?: boolean;
  noTitle?: boolean;
  titleTip?: any;
  smallCard?: boolean;
  Tips?: string;
  customStyleTitleWrapper?: string;
}

export class Card extends React.Component<CardProps> {
  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
  }

  render() {
    const {
      cardTitle,
      cardInfo,
      cardDataQa,
      className,
      customHeader,
      customFooter,
      buttonOnClick,
      buttonText,
      buttonIcon,
      buttonDataQa,
      buttonDisabled = false,
      buttonAppearance = "primary",
      noPadding = false,
      noHorizontalMargin = false,
      noTitle = false,
      titleTip,
      children,
      Tips,
      smallCard = false,
      cardSubTitle,
      customStyleTitleWrapper,
    } = this.props;
    return (
      <div
        className={classNames("card", className, {
          "no-padding": noPadding,
          "no-horizontal-margin": noHorizontalMargin,
          "no-title": noTitle,
          "small-card": smallCard,
        })}
        data-qa-id={cardDataQa}
      >
        {!noTitle && (
          <div
            className={classNames("card-title-wrap", {
              [`${customStyleTitleWrapper}`]: !!customStyleTitleWrapper,
            })}
          >
            {cardTitle && !buttonOnClick && !cardInfo && (
              <div>
                <span>
                  <span>{cardTitle}</span>
                  {cardSubTitle && <small className="card-sub-title">{cardSubTitle}</small>}
                  {Tips && <i className="icon-info" data-tip={Tips} />}
                  {titleTip}
                </span>
              </div>
            )}
            {cardTitle && buttonOnClick && (
              <div>
                <span>
                  <span>{cardTitle}</span>
                  {Tips && <i className="icon-info" data-tip={Tips} />}
                  {titleTip}
                </span>
                <div
                  className={classNames("styled-atlaskit-button", {
                    [`${buttonAppearance}`]: !buttonDisabled,
                  })}
                  data-qa-id={buttonDataQa}
                >
                  <Button
                    appearance={buttonAppearance}
                    iconBefore={buttonIcon && <span className={buttonIcon} />}
                    onClick={buttonOnClick}
                    isDisabled={buttonDisabled}
                  >
                    {buttonText}
                  </Button>
                </div>
              </div>
            )}
            {cardTitle && cardInfo && (
              <div>
                <span>
                  <span>{cardTitle}</span>
                  {Tips && <i className="icon-info" data-tip={Tips} />}
                  {titleTip}
                </span>
                <div className="card-info">{cardInfo}</div>
              </div>
            )}
            {customHeader && customHeader}
          </div>
        )}
        <div className="card-content">{children}</div>
        {customFooter}
      </div>
    );
  }
}
