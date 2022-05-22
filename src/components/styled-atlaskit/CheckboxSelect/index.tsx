/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { CheckboxSelect as AkSelect, SelectProps } from "@atlaskit/select";
import classNames from "classnames";
import { ReactNode } from "react";
import { SelectOption } from "../../../types";
import styles from "./index.module.scss";

export interface CheckboxSelectProps
  extends Pick<
    SelectProps<SelectOption, true>,
    | "options"
    | "onBlur"
    | "onFocus"
    | "isDisabled"
    | "isClearable"
    | "menuIsOpen"
    | "blurInputOnSelect"
    | "closeMenuOnSelect"
    | "menuPosition"
    | "minMenuHeight"
    | "maxMenuHeight"
  > {
  onChange?: (option: SelectOption[]) => void;
  value: SelectOption[] | null;
  className?: string;
  isValueHidden?: boolean;
  replacementText?: ReactNode;
}

export const CheckboxSelect = ({
  onChange,
  value,
  className,
  isValueHidden = false,
  isClearable = false,
  replacementText,
  ...props
}: CheckboxSelectProps) => {
  const renderSelect = () => (
    <AkSelect
      className={classNames("styled-atlaskit-checkbox-select", className, { "value-hidden": isValueHidden })}
      classNamePrefix="styled-atlaskit-checkbox-select"
      onChange={onChange ? (item) => onChange(item as SelectOption[]) : undefined}
      value={value}
      isClearable={isClearable}
      isSearchable={!isValueHidden}
      {...props}
    />
  );
  return isValueHidden ? (
    <div className={styles.checkboxSelectContainer}>
      {renderSelect()}
      <span className="value-replacement">{replacementText}</span>
    </div>
  ) : (
    renderSelect()
  );
};
