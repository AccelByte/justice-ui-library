/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import ReactTooltip from "react-tooltip";
import { default as classNames } from "classnames";
import "./index.scss";
import { renderToString } from "react-dom/server";
import { translation } from "../../../utils/i18n";

export interface HorizontalFieldTextProps {
  children?: React.ReactNode;
  label?: string;
  isLabelHidden?: boolean;
  isFlex?: boolean;
  className?: string;
  rightCellClassName?: string;
  isValueMultiLine?: boolean;
  tooltip?: string | null;
  dataQa?: string | null;
  labelAlignment?: "left" | "center" | "right";
  showTooltip?: boolean;
  isRequired?: boolean;
  optionalLabel?: string;
  showTooltipOnFocus?: boolean;
}

export const HorizontalFieldText = ({
  children,
  className,
  tooltip,
  showTooltip,
  showTooltipOnFocus,
  label = "",
  isLabelHidden = false,
  isFlex = true,
  rightCellClassName,
  isValueMultiLine = false,
  dataQa,
  labelAlignment,
  isRequired = true,
  optionalLabel = translation("common.optionalFieldLabel"),
}: HorizontalFieldTextProps) => {
  const tooltipRef = React.useRef<HTMLLIElement>(null);

  const showToolTips = () => {
    if (!tooltipRef.current) return;
    ReactTooltip.show(tooltipRef.current);
  };

  const hideToolTips = () => {
    if (!tooltipRef.current) return;
    ReactTooltip.hide(tooltipRef.current);
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  React.useEffect(() => {
    if (showTooltip && showTooltipOnFocus) {
      showToolTips();
    } else {
      hideToolTips();
    }
  }, [showTooltip]);

  return (
    <div
      className={classNames("horizontalFieldText", className, {
        "multi-line-row": isValueMultiLine,
        "label-hidden": isLabelHidden,
        row: isFlex,
      })}
    >
      {!isLabelHidden && (
        <div className={classNames("cell-1", labelAlignment)}>
          <span className="label">
            {label}
            {!isRequired && ` ${optionalLabel}`}
          </span>
          {tooltip && (
            <>
              <i
                ref={tooltipRef}
                className="fa-icon-info"
                data-for="horizontal-field-text-label__tooltip"
                data-tip={React.isValidElement(tooltip) ? renderToString(tooltip) : tooltip}
              />
              <ReactTooltip effect="solid" id="horizontal-field-text-label__tooltip" html={true} />
            </>
          )}
        </div>
      )}
      <div className={classNames("cell-2", rightCellClassName)} data-qa-id={dataQa}>
        {children}
      </div>
    </div>
  );
};
