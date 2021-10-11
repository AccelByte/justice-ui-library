/*
 *
 *  * Copyright (c) 2018-2021 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import * as React from "react";
import classNames from "classnames";
import ReactTooltip from "react-tooltip";
import { default as FieldText } from "@atlaskit/field-text";
import "./ValidFieldText.scss";
import { FieldCounter, FieldErrorMessage, FieldHelperText, FieldLabel } from "../Form/utility";
import { Popover } from "../Popover/Popover";

class Input extends FieldText {
  componentWillReceiveProps(nextProps: any, nextContext: any) {
    const isValueSame = this.props.value === nextProps.value;
    if (isValueSame) {
      return;
    }
    this.setState({
      value: nextProps.value,
    });
  }
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onKeyDown?: (event: React.FormEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  value: string;
  errMessage?: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  optionalLabel?: string;
  isLabelHidden?: boolean;
  type?: "number" | "text" | "password";
  min?: number;
  max?: number;
  helperText?: string;
  tooltip?: string;
  popoverContent?: React.ReactNode | string;
  validFieldTextRef?: React.RefObject<HTMLDivElement>;
  rightIcon?: React.ReactNode;
}

interface State {
  isFocus: boolean;
}

export class ValidFieldText extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isFocus: false,
    };

    if (props.type === "number" && typeof props.maxLength === "number") {
      throw new Error('prop maxLength cannot be used when prop type="number"');
    }
  }

  toolTipRef = React.createRef<HTMLElement>();
  toolTipDivRef = React.createRef<HTMLDivElement>();
  toolTipIconEye = React.createRef<HTMLElement>();

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
  }

  componentWillUnmount() {
    this.hideTooltip();
  }

  hideTooltip = () => {
    if (this.toolTipRef && this.toolTipRef.current) {
      ReactTooltip.hide(this.toolTipRef.current);
    }
    if (this.toolTipDivRef && this.toolTipDivRef.current) {
      ReactTooltip.hide(this.toolTipDivRef.current);
    }
    if (this.toolTipIconEye && this.toolTipIconEye.current) {
      ReactTooltip.hide(this.toolTipIconEye.current);
    }
  };

  showTooltip = () => {
    if (this.toolTipRef && this.toolTipRef.current) {
      ReactTooltip.show(this.toolTipRef.current);
    }
    if (this.toolTipDivRef && this.toolTipDivRef.current) {
      ReactTooltip.show(this.toolTipDivRef.current);
    }
  };

  resetTooltipIconEye = () => {
    if (this.toolTipIconEye && this.toolTipIconEye.current) {
      ReactTooltip.hide(this.toolTipIconEye.current);
      ReactTooltip.show(this.toolTipIconEye.current);
    }
  };

  handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { onBlur } = this.props;
    this.hideTooltip();

    if (typeof onBlur === "function") {
      return onBlur(event);
    }
    this.setState({ isFocus: false });
  };

  handleFocus = () => {
    this.showTooltip();
    this.setState({ isFocus: true });
  };

  render() {
    const {
      onChange,
      name,
      label,
      placeholder,
      value,
      disabled,
      min,
      max,
      maxLength,
      className,
      optionalLabel,
      errMessage,
      isLabelHidden,
      helperText,
      tooltip,
      popoverContent,
      onKeyDown,
      validFieldTextRef,
    } = this.props;

    return (
      <div className={classNames(className, "valid-field-text")} ref={validFieldTextRef}>
        <div
          className={classNames("fieldHeader", {
            pushRight: !label && optionalLabel,
          })}
        >
          {!isLabelHidden && (
            <FieldLabel label={label} optionalLabel={optionalLabel} tooltip={tooltip} tooltipRef={this.toolTipRef} />
          )}
          {!!maxLength && <FieldCounter value={value} maxLength={maxLength} className="px-0" />}
        </div>

        <Popover
          className={classNames("valid-field-text-input-container", { focusedFieldText: this.state.isFocus })}
          content={popoverContent}
          tooltipRef={this.toolTipDivRef}
        >
          <Input
            isLabelHidden={false}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            min={min}
            max={max}
            shouldFitContainer={true}
            onKeyDown={onKeyDown}
            maxLength={maxLength}
          />
        </Popover>
        {errMessage && <FieldErrorMessage message={errMessage} />}
        {helperText && <FieldHelperText message={helperText} />}
      </div>
    );
  }
}
