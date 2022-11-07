/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import classNames from "classnames";
import ReactTooltip from "react-tooltip";
import { default as FieldText } from "@atlaskit/field-text";
import "./ValidFieldText.scss";
import { FieldCounter, FieldErrorMessage, FieldHelperText, FieldLabel } from "../Form/utility/FormUtility";
import { Placement } from "@atlaskit/inline-dialog/types";
import { InlinePopover, InlinePopoverType } from "../InlinePopover/InlinePopover";
import { isForbiddenKey } from "../../utils";

export class Input extends FieldText {
  componentWillReceiveProps(nextProps: any) {
    const isValueSame = this.props.value === nextProps.value;
    if (isValueSame) {
      return;
    }
    this.setState({
      value: nextProps.value,
    });
  }
}

export interface ValidFieldTextProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    "maxLength" | "placeholder" | "disabled" | "onBlur" | "className"
  > {
  onKeyDown?: (event: React.FormEvent<HTMLInputElement>) => void;
  label?: string;
  name: string;
  value: string;
  errMessage?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  optionalLabel?: string;
  isLabelHidden?: boolean;
  isInvalid?: boolean;
  type?: "number" | "text" | "password" | "float";
  precision?: number;
  min?: number;
  max?: number;
  helperText?: React.ReactNode;
  tooltip?: string;
  dataQa?: string | null;
  dataQaProps?: string | null;
  validFieldTextRef?: React.RefObject<HTMLDivElement>;
  rightIcon?: React.ReactNode;
  autoComplete?: "on" | "off";
  showTooltipOnFocus?: boolean;
  popoverContent?: React.ReactNode;
  popoverPlacement?: Placement;
  popoverType?: InlinePopoverType;
  onFocus?: (event: React.FormEvent<HTMLInputElement>) => void;
  customField?: React.ReactNode;
}

interface State {
  isFocus: boolean;
}

export class ValidFieldText extends React.Component<ValidFieldTextProps, State> {
  constructor(props: ValidFieldTextProps) {
    super(props);
    this.state = {
      isFocus: false,
    };

    if (props.type === "number" && typeof props.maxLength === "number") {
      throw new Error('prop maxLength cannot be used when prop type="number"');
    }
  }

  toolTipRef = React.createRef<HTMLElement>();

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
  };

  showTooltip = () => {
    if (this.toolTipRef && this.toolTipRef.current && this.props.showTooltipOnFocus) {
      ReactTooltip.show(this.toolTipRef.current);
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

  handleFocus = (event: React.FormEvent<HTMLInputElement>) => {
    const { onFocus } = this.props;
    if (onFocus) onFocus(event);
    this.showTooltip();
    this.setState({ isFocus: true });
  };

  getInputType = () => {
    const { type, precision } = this.props;
    switch (type) {
      case "float":
        if (precision === 0) return "number";
        return "tel";
      default:
        return type;
    }
  };

  handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { onKeyDown, type, min, value, precision } = this.props;
    const isTypeNumeric = ["number", "float"].includes(type as string);

    if (
      isTypeNumeric &&
      !event.ctrlKey &&
      isForbiddenKey({ event, value, min, isFloat: this.getInputType() === "tel", precision })
    ) {
      event.preventDefault();
    }

    if (onKeyDown) onKeyDown(event);
  };

  renderInput = () => {
    const { placeholder, name, value, disabled, min, max, maxLength, autoComplete, onChange } = this.props;
    return (
      <Input
        isLabelHidden={false}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        placeholder={placeholder}
        name={name}
        value={value}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onChange={onChange}
        disabled={disabled}
        type={this.getInputType()}
        min={min}
        max={max}
        shouldFitContainer={true}
        onKeyDown={this.handleOnKeyDown}
        maxLength={maxLength}
        autoComplete={autoComplete}
      />
    );
  };

  render() {
    const {
      label = "",
      value,
      maxLength,
      className,
      optionalLabel,
      errMessage,
      isLabelHidden,
      helperText,
      tooltip,
      dataQa,
      dataQaProps,
      rightIcon,
      validFieldTextRef,
      popoverContent,
      popoverPlacement,
      popoverType,
      customField,
      isRequired = true,
      isInvalid = true,
    } = this.props;
    const { isFocus } = this.state;

    return (
      <div
        className={classNames(className, "valid-field-text")}
        data-qa-id={dataQa}
        data-qa-props={dataQaProps}
        ref={validFieldTextRef}
      >
        <div
          className={classNames("fieldHeader", {
            pushRight: !label && !isRequired,
          })}
        >
          {!isLabelHidden && (
            <FieldLabel
              label={label}
              optionalLabel={optionalLabel}
              isRequired={isRequired}
              tooltip={tooltip}
              tooltipRef={this.toolTipRef}
            />
          )}
          {!!maxLength && <FieldCounter value={value} maxLength={maxLength} className="px-0" />}
        </div>
        <div className={classNames("valid-field-text-input-container", { focusedFieldText: this.state.isFocus })}>
          {popoverContent ? (
            <InlinePopover isOpen={isFocus} placement={popoverPlacement} content={popoverContent} type={popoverType}>
              {this.renderInput()}
            </InlinePopover>
          ) : (
            this.renderInput()
          )}
          {!!rightIcon && <div className="rightIcon">{rightIcon}</div>}
        </div>
        {customField}
        {isInvalid && errMessage && <FieldErrorMessage message={errMessage} />}
        {helperText && <FieldHelperText message={helperText} />}
      </div>
    );
  }
}
