/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { default as classNames } from "classnames";
import { SelectOption } from "../../types";
import "./index.scss";

/** @deprecated Use StyledRadio instead */
export const RadioButtonItem = ({
  isDisabled = false,
  isSelected = false,
  onChange,
  item,
}: {
  isDisabled?: boolean;
  isSelected?: boolean;
  onChange?: () => void;
  item: SelectOption<string | boolean>;
}) => {
  return (
    <div
      className={classNames("radio-item", { isDisabled, isSelected })}
      onClick={isDisabled || isSelected ? undefined : onChange}
    >
      <span className="radio-icon" />
      <span className="radio-label">{item.label}</span>
    </div>
  );
};

/** @deprecated Use StyledRadio instead */
export interface RadioButtonProps {
  options: SelectOption<string | boolean>[];
  selectedRadio: SelectOption<string | boolean>;
  onChange: (item: SelectOption<string | boolean>) => void;
  isDisabled?: boolean;
  isHorizontal?: boolean;
  className?: string;
  dataQa?: string | null;
}

/** @deprecated Use StyledRadio instead */
export const RadioButton = ({
  options = [],
  selectedRadio,
  onChange,
  isDisabled = false,
  isHorizontal = true,
  className,
  dataQa,
}: RadioButtonProps) => {
  return (
    <div
      className={classNames(className, {
        "radio-group-horizontal": isHorizontal,
        "radio-group-vertical": !isHorizontal,
      })}
      data-qa-id={dataQa}
    >
      {options.map((item, index) => (
        <RadioButtonItem
          key={index}
          item={item}
          isDisabled={isDisabled}
          isSelected={item.value === selectedRadio.value}
          onChange={() => onChange(item)}
        />
      ))}
    </div>
  );
};
