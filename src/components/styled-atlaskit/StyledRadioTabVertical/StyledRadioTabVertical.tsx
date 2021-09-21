/*
 * Copyright (c) 2018-2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import "./StyledRadioTabVertical.scss";
import { FieldErrorMessage, FieldLabel } from "../../Form/utility";
import { RadioOption } from "../../../types";
import { addLineBreaks } from "../../Typography/typography";

export interface RadioOptionWithRenderAction<T = string> extends RadioOption<T> {
  render?: () => React.ReactNode;
}

interface Props {
  label: string;
  options: RadioOptionWithRenderAction<string | boolean>[];
  selectedRadio: string | boolean;
  onChange: (item: RadioOption<string | boolean>) => void;
  disabled?: boolean;
  errMessage?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  tooltip?: string;
  dataQa?: string | null;
  className?: string;
}

export const StyledRadioTabVertical = ({
  label,
  options = [],
  selectedRadio,
  onChange,
  errMessage,
  isInvalid,
  disabled = false,
  isRequired = false,
  tooltip,
  className,
}: Props) => {
  return (
    <div className={className}>
      {!!label && (
        <FieldLabel label={label}>
          &nbsp;
          {tooltip && <i className="icon-info" data-tip={tooltip} />}
        </FieldLabel>
      )}
      <div className={classNames(["styled-radio-tab-vertical"])}>
        {options.map((item) => (
          <div key={`radio-tab-vertical-${item.value}`} className={"radio-container"}>
            <div
              className={classNames("radio-item", {
                disabled,
                selected: item.value === selectedRadio,
              })}
              {...(!disabled && item.value !== selectedRadio && { onClick: onChange.bind(null, item) })}
              key={String(item.value)}
            >
              <span className="radio-icon" />
              <span className="radio-label">{item.label}</span>
              {item.value === selectedRadio && !!item.helper && (
                <span className="radio-helper">{addLineBreaks(item.helper)}</span>
              )}
            </div>
            {item.value === selectedRadio && !!item.render && <div className={"render-content"}>{item.render()}</div>}
          </div>
        ))}
      </div>
      {isRequired && isInvalid && errMessage && <FieldErrorMessage message={errMessage} />}
    </div>
  );
};
