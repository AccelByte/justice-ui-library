import * as React from "react";
import { DatetimepickerProps } from "react-datetime";
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
}
declare class DateTimePicker extends React.Component<DateTimePickerProps> {
    renderInput: (props: any, openCalendar: any) => JSX.Element;
    render(): JSX.Element;
}
export { DateTimePicker };
