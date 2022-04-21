/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import { FieldErrorMessage, FieldLabel } from "../Form/utility";
import { AsyncPaginate, AsyncPaginateProps } from "react-select-async-paginate";

export interface ValidSelectAsyncProps<OptionType, Group, Additional, isMulti extends boolean>
  extends AsyncPaginateProps<OptionType, Group, Additional, isMulti> {
  label?: string;
  errMessage?: string;
  optionalLabel?: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  tooltip?: string;
  className?: string;
}

export const ValidSelectAsync = <OptionType, Group, Additional, isMulti extends boolean>({
  label,
  errMessage,
  optionalLabel,
  isInvalid,
  isRequired = true,
  tooltip,
  className,
  ...props
}: ValidSelectAsyncProps<OptionType, Group, Additional, isMulti>) => (
  <div className={classNames("valid-select-input", className)}>
    {!!label && <FieldLabel label={label} optionalLabel={optionalLabel} isRequired={isRequired} tooltip={tooltip} />}
    <AsyncPaginate {...props} />
    {isInvalid && <FieldErrorMessage message={errMessage} />}
  </div>
);
