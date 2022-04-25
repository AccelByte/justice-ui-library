/*
 *  Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 *  This is licensed software from AccelByte Inc, for limitations
 *  and restrictions contact your company contract manager.
 */

import * as React from "react";
import { DatetimepickerProps } from "react-datetime";
import { default as classNames } from "classnames";
import Datetime from "react-datetime";
import { FieldErrorMessage } from "../Form/utility";
import "react-datetime/css/react-datetime.css";
import "./index.scss";
import "../../styles/icons/fa_icons.css";

export interface DateTimePickerProps extends DatetimepickerProps {
  dataQa?: string | null;
  errorMessage?: string;
  className?: string;
  isDisabled?: boolean;
}

class DateTimePicker extends React.Component<DateTimePickerProps> {
  renderInput = (props: any, openCalendar: any) => {
    const { isDisabled } = this.props;

    const onKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();
    };

    return (
      <div className={classNames("datepicker__input-field", { isDisabled })}>
        <input {...props} onKeyDown={onKeyDown} />
        <i className="icon fa-icon-calendar" onClick={!isDisabled ? () => openCalendar() : undefined} />
      </div>
    );
  };

  render() {
    const { className, dataQa, errorMessage, ...dateTimePickerProps } = this.props;
    return (
      <div className={classNames("datepicker__container", className)} data-qa-id={dataQa}>
        <Datetime {...dateTimePickerProps} {...{ renderInput: this.renderInput }} />
        {errorMessage && <FieldErrorMessage message={errorMessage} />}
      </div>
    );
  }
}

export { DateTimePicker };
