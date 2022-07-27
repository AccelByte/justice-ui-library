/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { default as classNames } from "classnames";
import { FieldTextAreaStateless, FieldTextAreaStatelessProps } from "@atlaskit/field-text-area";
import "./ValidFieldTextArea.scss";
import { FieldCounter, FieldErrorMessage, FieldHelperText, FieldLabel } from "../Form/utility";

export interface ValidFieldTextAreaProps extends FieldTextAreaStatelessProps {
  value: string;
  errMessage?: string;
  helperText?: React.ReactNode;
  tooltip?: string;
  isRequired?: boolean;
  dataQa?: string | null;
  optionalLabel?: string;
}

export const ValidFieldTextArea = ({
  label = "",
  placeholder,
  value,
  errMessage,
  helperText,
  tooltip,
  shouldFitContainer = true,
  isRequired = true,
  isInvalid = true,
  minimumRows,
  onBlur: onBlurProps,
  maxLength,
  onChange,
  dataQa,
  optionalLabel,
  ...props
}: ValidFieldTextAreaProps) => {
  const [isInputFocused, setIsInputFocused] = React.useState<boolean>(false);

  const onFocus = () => {
    setIsInputFocused(true);
  };

  const onBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsInputFocused(false);
    if (onBlurProps) onBlurProps(event);
  };

  return (
    <div className="valid-field-text-area" data-qa-id={dataQa}>
      <div
        className={classNames("fieldHeader", {
          pushRight: !label && !!maxLength,
        })}
      >
        {label && <FieldLabel label={label} optionalLabel={optionalLabel} isRequired={isRequired} tooltip={tooltip} />}
        {!!maxLength && <FieldCounter value={value} maxLength={maxLength} />}
      </div>
      <div className={classNames("valid-field-text-area-container", { focusedFieldText: isInputFocused })}>
        <FieldTextAreaStateless
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          isLabelHidden={true}
          value={value}
          shouldFitContainer={shouldFitContainer}
          minimumRows={minimumRows}
          placeholder={placeholder}
          {...props}
        />
      </div>
      {isInvalid && errMessage && <FieldErrorMessage message={errMessage} />}
      {helperText && <FieldHelperText message={helperText} />}
    </div>
  );
};
