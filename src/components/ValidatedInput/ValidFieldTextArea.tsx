/*
 *
 *  * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import React from "react";
import ReactTooltip from "react-tooltip";
import { default as classNames } from "classnames";
import { FieldTextAreaStateless, FieldTextAreaStatelessProps } from "@atlaskit/field-text-area";
import "./ValidFieldTextArea.scss";
import { FieldCounter, FieldErrorMessage, FieldHelperText, FieldLabel } from "../Form/utility";

export interface ValidFieldTextAreaProps extends FieldTextAreaStatelessProps {
  label?: string;
  value: string;
  errMessage?: string;
  isInvalid?: boolean;
  optionalLabel?: string;
  helperText?: string;
  tooltip?: string;
  shouldFitContainer?: boolean;
  minimumRows?: number;
  placeholder?: string;
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}

export const ValidFieldTextArea = ({
  label = "",
  value,
  errMessage,
  isInvalid,
  optionalLabel,
  helperText,
  tooltip,
  shouldFitContainer = true,
  minimumRows,
  onBlur: onBlurProps,
  placeholder,
  maxLength,
  ...props
}: ValidFieldTextAreaProps) => {
  const tooltipRef = React.useRef<HTMLInputElement>(null);
  const [isInputFocused, setIsInputFocused] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (tooltipRef && tooltipRef.current) {
      if (isInputFocused) {
        ReactTooltip.show(tooltipRef.current);
      } else {
        ReactTooltip.hide(tooltipRef.current);
      }
    }
  }, [isInputFocused]);

  const onFocus = () => {
    setIsInputFocused(true);
  };

  const onBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsInputFocused(false);
    if (onBlurProps) onBlurProps(event);
  };

  return (
    <div className="valid-field-text-area">
      <div
        className={classNames("fieldHeader", {
          pushRight: !label && !!maxLength,
        })}
      >
        {label && (
          <FieldLabel label={label} optionalLabel={optionalLabel}>
            {tooltip && <i ref={tooltipRef} className="icon-info" data-tip={tooltip} />}
          </FieldLabel>
        )}
        {!!maxLength && <FieldCounter value={value} maxLength={maxLength} />}
      </div>
      <div className={classNames("valid-field-text-area-container", { focusedFieldText: isInputFocused })}>
        <FieldTextAreaStateless
          onFocus={onFocus}
          onBlur={onBlur}
          isLabelHidden={true}
          value={value}
          shouldFitContainer={shouldFitContainer}
          minimumRows={minimumRows}
          placeholder={placeholder}
          {...props}
        />
      </div>
      <div className={classNames("fieldInformationTextArea")}>
        <div>
          {isInvalid && <FieldErrorMessage message={errMessage} />}
          {helperText && <FieldHelperText message={helperText} />}
        </div>
      </div>
    </div>
  );
};
