/*
 *  Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 *  This is licensed software from AccelByte Inc, for limitations
 *  and restrictions contact your company contract manager.
 */

import * as React from "react";
import { DatetimepickerProps } from "react-datetime";
import { default as classNames } from "classnames";
import Datetime from "react-datetime";
import { FieldErrorMessage, FieldLabel } from "../Form/utility/FormUtility";
import "react-datetime/css/react-datetime.css";
import "./index.scss";
import "../../styles/icons/fa_icons.css";

export interface DateTimePickerProps extends DatetimepickerProps {
  dataQa?: string | null;
  errorMessage?: string;
  className?: string;
  isDisabled?: boolean;
  label?: string;
  tooltip?: string;
  isPositionUnset?: boolean;
  enableManualInput?: boolean;
}

class DateTimePicker extends React.Component<DateTimePickerProps> {
  renderInput = (props: any, openCalendar: any) => {
    const { isDisabled, enableManualInput = false } = this.props;

    const onKeyDown = (event: KeyboardEvent) => {
      if (!enableManualInput) {
        event.preventDefault();
      }
    };

    return (
      <div className={classNames("datepicker__input-field", { isDisabled })}>
        <input {...props} onKeyDown={onKeyDown} />
        <i className="icon icon-calendar" onClick={!isDisabled ? () => openCalendar() : undefined} />
      </div>
    );
  };

  render() {
    const {
      className,
      dataQa,
      errorMessage,
      label = "",
      isPositionUnset,
      tooltip,
      ...dateTimePickerProps
    } = this.props;
    return (
      <div
        className={classNames("datepicker__container", { "unpositioned-datepicker": isPositionUnset }, className)}
        data-qa-id={dataQa}
      >
        {label && <FieldLabel {...{ label, tooltip }} />}
        <Datetime {...dateTimePickerProps} {...{ renderInput: this.renderInput }} />
        {errorMessage && <FieldErrorMessage message={errorMessage} />}
      </div>
    );
  }
}

export { DateTimePicker };
