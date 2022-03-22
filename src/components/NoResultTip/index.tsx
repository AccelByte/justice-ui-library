/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import classNames from "classnames";
import React from "react";
import { renderToString } from "react-dom/server";
import ReactTooltip from "react-tooltip";
import { addLineBreaks } from "../../utils";
import "./index.scss";

export interface NoResultTipProps {
  title?: string;
  tooltip?: string;
  primaryText: React.ReactNode;
  secondaryText?: string;
  boxShadow?: boolean;
  inModal?: boolean;
  className?: string;
  errorImage?: string;
  errorImageClass?: string;
  dataQa?: string | null;
  additionalComponent?: React.ReactNode | string;
}

export const NoResultTip = ({
  title,
  tooltip,
  primaryText,
  secondaryText,
  className,
  errorImage,
  errorImageClass,
  boxShadow = true,
  inModal = false,
  dataQa,
  additionalComponent,
}: NoResultTipProps) => {
  const dataTip = React.isValidElement(tooltip) ? renderToString(tooltip) : tooltip;
  return (
    <div data-qa-id={dataQa} className={classNames("justice-search-no-result", className, { boxShadow }, { inModal })}>
      <div className={"justice-search-no-result-wrapper"}>
        {!!errorImage && <img className={errorImageClass} src={errorImage} />}

        {!!title && (
          <h4>
            {title}
            {tooltip && (
              <>
                <i className="fa-icon-info" data-for="justice-search-no-result__tooltip" data-tip={dataTip} data-place="right" />
                <ReactTooltip effect="solid" id="justice-search-no-result__tooltip" html={true} />
              </>
            )}
          </h4>
        )}
        {typeof primaryText === "string" ? addLineBreaks(primaryText) : <p> {primaryText} </p>}
        {!!secondaryText && <p>{secondaryText}</p>}

        {additionalComponent}
      </div>
    </div>
  );
};
