/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { default as classNames } from "classnames";
import "./index.scss";
import { RadioOption } from "../../types";
import { FieldErrorMessage, FieldLabel } from "../Form/utility";
import { addLineBreaks } from "../../utils";
import { LineBreakToList } from "../..";

export interface StyledRadioProps {
  label?: string;
  options: RadioOption<string | boolean>[];
  selectedRadio: string | boolean;
  onChange: (item: RadioOption<string | boolean>) => void;
  disabled?: boolean;
  errMessage?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  tooltip?: string;
  isHorizontal?: boolean;
  isList?: boolean;
  className?: string;
  dataQa?: string | null;
}

export const StyledRadio = ({
  label,
  options = [],
  selectedRadio,
  onChange,
  errMessage,
  isInvalid,
  disabled = false,
  isRequired = true,
  isList = false,
  tooltip,
  isHorizontal = true,
  className,
  dataQa,
}: StyledRadioProps) => {
  return (
    <div className={className}>
      {!!label && <FieldLabel label={label} isRequired={isRequired} tooltip={tooltip} />}
      <div
        data-qa-id={dataQa}
        className={classNames("horizontal-radio-group", { "vertical-radio-group": !isHorizontal })}
      >
        {options.map((item) => (
          <div
            className={classNames("radio-item", {
              disabled,
              selected: item.value === selectedRadio,
            })}
            {...(!disabled && item.value !== selectedRadio && { onClick: onChange.bind(null, item) })}
            key={String(item.value)}
            data-qa-props={dataQa && item.value}
          >
            <span className="radio-icon" />
            <span className="radio-label">{item.label}</span>
            {!isHorizontal &&
              item.helper &&
              (isList ? (
                <LineBreakToList text={item.helper} className="radio-helper ml-2" />
              ) : (
                <span className="radio-helper">{addLineBreaks(item.helper)}</span>
              ))}
            {item.customChild && <div>{item.customChild}</div>}
          </div>
        ))}
      </div>
      {isRequired && isInvalid && errMessage && <FieldErrorMessage message={errMessage} />}
      {isHorizontal &&
        options.map(
          (item) =>
            selectedRadio === item.value &&
            item.helper && (
              <div className="horizontal-radio-helper" key={String(item.value)}>
                {addLineBreaks(item.helper)}
              </div>
            )
        )}
    </div>
  );
};
