/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import ReactTooltip from "react-tooltip";
import { default as classNames } from "classnames";
import "./index.scss";
import { FieldLabel } from "../utility";
import { renderToString } from "react-dom/server";

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

export class HorizontalFieldText extends React.Component<HorizontalFieldTextProps> {
  constructor(props: HorizontalFieldTextProps) {
    super(props);
  }
  tooltipRef = React.createRef<HTMLInputElement>();

  showToolTips = () => {
    if (this.tooltipRef && this.tooltipRef.current) {
      ReactTooltip.show(this.tooltipRef.current);
    }
  };

  hideToolTips = () => {
    if (this.tooltipRef && this.tooltipRef.current) {
      ReactTooltip.hide(this.tooltipRef.current);
    }
  };

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
  }

  componentWillUpdate(nextProps: Readonly<HorizontalFieldTextProps>): void {
    if (nextProps.showTooltip !== this.props.showTooltip) {
      if (nextProps.showTooltip && this.props.showTooltipOnFocus) {
        this.showToolTips();
      } else {
        this.hideToolTips();
      }
    }
  }

  render() {
    const {
      children,
      label = "",
      isLabelHidden = false,
      isFlex = true,
      rightCellClassName,
      className,
      tooltip,
      isValueMultiLine = false,
      dataQa,
      labelAlignment,
      isRequired = true,
      optionalLabel,
    } = this.props;
    const dataTip = React.isValidElement(tooltip) ? renderToString(tooltip) : tooltip;

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
                  ref={this.tooltipRef}
                  className="fa-icon-info"
                  data-for="horizontal-field-text-label__tooltip"
                  data-tip={dataTip}
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
  }
}
