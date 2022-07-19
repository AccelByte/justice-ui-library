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
import { NoResultTip } from "../NoResultTip";
import { renderToString } from "react-dom/server";
import { translation } from "../../utils/i18n";
import { ButtonAppearance } from "../Button";
import "../../styles/icons/fa_icons.css";

export interface CardProps {
  children: React.ReactNode;
  /** A custom element placed at the bottom of the card */
  customFooter?: JSX.Element | null;
  /** A custom element placed at the bottom of the card. Use this when `cardTitle`, `buttonOnClick`, and `cardInfo` are not set */
  customHeader?: React.ReactNode;
  /** Title of the card. Bold, big, and placed in the top left side */
  cardTitle?: string;
  /** Subtitle of the card. Smaller than `cardTitle` and placed right next to it */
  cardSubTitle?: string;
  /** An info text placed at the top right side of the card */
  cardInfo?: string;
  cardDataQa?: string | null;
  className?: string;
  /** When its value is not falsy, a button will be displayed whose `onClick` property depends on this */
  buttonOnClick?: any;
  /** The text of the button when it is displayed */
  buttonText?: React.ReactNode;
  /** An icon displayed in the left side of `buttonText` */
  buttonIcon?: string;
  buttonDataQa?: string | null;
  buttonAppearance?: ButtonAppearance;
  buttonDisabled?: boolean;
  /** Set if the card has no padding */
  noPadding?: boolean;
  /** Set if the card has no horizontal margin */
  noHorizontalMargin?: boolean;
  /** Set if the card has no header */
  noTitle?: boolean;
  /** Has the same styling as `cardTitle`, but it is placed to the right of `cardSubTitle` */
  titleTip?: any;
  /** Set if the card's content is visible */
  isAuthorized?: boolean;
  /** Set if the card is small */
  smallCard?: boolean;
  /** If it is set, an info icon will appear next to `cardTitle`. Hover the icon to see the text set to `Tips` as a tooltip */
  Tips?: string;
  /** Custom classname set next to `.card-title-wrap` */
  customStyleTitleWrapper?: string;
  /** A text to show when `isAuthorized` is false */
  noResultText?: React.ReactNode;
}

export const Card = ({
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
  noResultText = translation("unauthorized.message"),
}: CardProps) => {
  const dataTip = React.isValidElement(Tips) ? renderToString(Tips) : Tips;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

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
                    <i className="icon-info" data-for="cardInfo__tooltip" data-tip={dataTip} />
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
                {cardSubTitle && <small className="card-sub-title">{cardSubTitle}</small>}
                {Tips && (
                  <>
                    <i className="icon-info" data-for="cardInfo__tooltip" data-tip={dataTip} />
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
                {cardSubTitle && <small className="card-sub-title">{cardSubTitle}</small>}
                {Tips && (
                  <>
                    <i className="icon-info" data-for="cardInfo__tooltip" data-tip={dataTip} />
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
};
