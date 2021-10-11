/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import ReactTooltip from "react-tooltip";
import { default as classNames } from "classnames";
import "./index.scss";

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
      if (nextProps.showTooltip) {
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
      labelAlignment = "right",
      isRequired = true,
      optionalLabel,
    } = this.props;
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
            {tooltip && <i className="icon-info" data-tip={tooltip} ref={this.tooltipRef} />}
          </div>
        )}
        <div className={classNames("cell-2", rightCellClassName)} data-qa-id={dataQa}>
          {children}
        </div>
      </div>
    );
  }
}
