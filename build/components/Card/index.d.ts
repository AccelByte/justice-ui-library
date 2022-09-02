import * as React from "react";
import "./index.scss";
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
    /** Set styling for card to overflow-x to auto if it set to true */
    overflowXAuto?: boolean;
}
export declare const Card: ({ cardTitle, cardInfo, cardDataQa, className, customHeader, customFooter, buttonOnClick, buttonText, buttonIcon, buttonDataQa, buttonDisabled, buttonAppearance, noPadding, noHorizontalMargin, noTitle, titleTip, children, isAuthorized, Tips, smallCard, cardSubTitle, customStyleTitleWrapper, noResultText, overflowXAuto, }: CardProps) => JSX.Element;
