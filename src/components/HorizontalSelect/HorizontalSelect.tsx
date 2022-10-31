/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import classNames from "classnames";
import { SelectOption } from "../../types";
import styles from "./index.module.scss";

export interface HorizontalSelectProps<T> {
  options: SelectOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  dataQa?: string | null;
}

function horizontalSelect<T = string>(props: HorizontalSelectProps<T>) {
  const { options, className, onChange, value, dataQa } = props;
  return (
    <div className={classNames(styles.horizontalSelect, className)} data-qa-id={dataQa}>
      {options.map((option) => (
        <div
          key={`${option.label}-${option.value}`}
          className={classNames(styles.horizontalSelectOption, { [styles.isSelected]: option.value === value })}
          onClick={() => onChange(option.value)}
          data-qa-props={option.label}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}

export { horizontalSelect as HorizontalSelect };
