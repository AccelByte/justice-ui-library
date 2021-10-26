/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import classNames from "classnames";
import { SelectOption } from "../../../types";
const { default: styles } = require("./index.module.scss");

export interface HorizontalSelectProps<T> {
  options: SelectOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

function horizontalSelect<T = string>(props: HorizontalSelectProps<T>) {
  const { options, className, onChange, value } = props;
  return (
    <div className={classNames(styles.horizontalSelect, className)}>
      {options.map((option) => (
        <div
          key={`${option.label}-${option.value}`}
          className={classNames(styles.horizontalSelectOption, {
            [`${styles.isSelected}`]: option.value === value,
          })}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}

export { horizontalSelect as HorizontalSelect };
