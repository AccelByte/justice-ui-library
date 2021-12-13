/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import classNames from "classnames";
import { ButtonWithIcon } from "../ButtonWithIcon";
import ReactTooltip from "react-tooltip";
import "./index.scss";
import { ButtonAppearances } from "@atlaskit/button";
import { NoResultTip } from "../NoResultTip";
import { renderToString } from "react-dom/server";

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
  buttonText?: React.ReactNode;
  buttonIcon?: string;
  buttonDataQa?: string | null;
  buttonAppearance?: ButtonAppearances;
  buttonDisabled?: boolean;
  noPadding?: boolean;
  noHorizontalMargin?: boolean;
  noTitle?: boolean;
  titleTip?: any;
  isAuthorized?: boolean;
  smallCard?: boolean;
  Tips?: string;
  customStyleTitleWrapper?: string;
  noResultText?: React.ReactNode;
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
      isAuthorized = true,
      Tips,
      smallCard = false,
      cardSubTitle,
      customStyleTitleWrapper,
      noResultText,
    } = this.props;
    const dataTip = React.isValidElement(Tips) ? renderToString(Tips) : Tips;

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
          <div className={classNames("card-title-wrap", customStyleTitleWrapper)}>
            {cardTitle && !buttonOnClick && !cardInfo && (
              <div>
                <span>
                  <span>{cardTitle}</span>
                  {cardSubTitle && <small className="card-sub-title">{cardSubTitle}</small>}
                  {Tips && (
                    <>
                      <i className="fa-icon-info" data-for="cardInfo__tooltip" data-tip={dataTip} />
                      <ReactTooltip effect="solid" id="cardInfo__tooltip" html={true} />
                    </>
                  )}
                  {titleTip}
                </span>
              </div>
            )}
            {cardTitle && buttonOnClick && (
              <div>
                <span>
                  <span>{cardTitle}</span>
                  {Tips && (
                    <>
                      <i className="fa-icon-info" data-for="cardInfo__tooltip" data-tip={dataTip} />
                      <ReactTooltip effect="solid" id="cardInfo__tooltip" html={true} />
                    </>
                  )}
                  {titleTip}
                </span>
                <div
                  className={classNames("styled-atlaskit-button", {
                    [`${buttonAppearance}`]: !buttonDisabled,
                  })}
                  data-qa-id={buttonDataQa}
                >
                  <ButtonWithIcon
                    appearance={smallCard ? "link" : buttonAppearance}
                    buttonIcon={buttonIcon}
                    onClick={buttonOnClick}
                    isDisabled={buttonDisabled}
                  >
                    {buttonText}
                  </ButtonWithIcon>
                </div>
              </div>
            )}
            {cardTitle && cardInfo && (
              <div>
                <span>
                  <span>{cardTitle}</span>
                  {Tips && (
                    <>
                      <i className="fa-icon-info" data-for="cardInfo__tooltip" data-tip={dataTip} />
                      <ReactTooltip effect="solid" id="cardInfo__tooltip" html={true} />
                    </>
                  )}
                  {titleTip}
                </span>
                <div className="card-info">{cardInfo}</div>
              </div>
            )}
            {customHeader && customHeader}
          </div>
        )}
        {isAuthorized ? (
          <div className="card-content">{children}</div>
        ) : (
          <NoResultTip primaryText={noResultText} boxShadow={false} />
        )}
        {customFooter}
      </div>
    );
  }
}
