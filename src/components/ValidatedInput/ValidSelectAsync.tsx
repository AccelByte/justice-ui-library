/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import { FieldErrorMessage, FieldHelperText, FieldLabel, FieldReloadMessage } from "../Form/utility";
import { AsyncPaginate, AsyncPaginateProps, LoadOptions } from "react-select-async-paginate";
import "./ValidSelectAsync.scss";
import { Enum, SelectOption } from "../../types";
import { RELOADSTATUS } from "./ValidSelect";

export interface ValidSelectAsyncProps<OptionType, Group, Additional, isMulti extends boolean>
  extends AsyncPaginateProps<OptionType, Group, Additional, isMulti> {
  label?: string;
  errMessage?: string;
  optionalLabel?: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  tooltip?: string;
  className?: string;
  dataQa?: string | null;
  helperText?: React.ReactNode;
  isShowReloadWhileFetchFailed: boolean;
  reloadMessage?: string;
  onReload?: () => void;
  reloaderStatus?: Enum<typeof RELOADSTATUS>;
}

export type ValidSelectAsyncLoadOptions<OptionType> = LoadOptions<OptionType, unknown, unknown>;

export const ValidSelectAsync = <OptionType, Group, Additional, isMulti extends boolean>({
  label,
  errMessage,
  optionalLabel,
  isInvalid,
  isRequired = true,
  tooltip,
  className,
  dataQa,
  helperText,
  isShowReloadWhileFetchFailed,
  reloadMessage,
  onReload,
  reloaderStatus,
  ...props
}: ValidSelectAsyncProps<OptionType, Group, Additional, isMulti>) => (
  <div className={classNames("valid-select-input", "valid-select-async-input", className)} data-qa-id={dataQa}>
    {!!label && <FieldLabel label={label} optionalLabel={optionalLabel} isRequired={isRequired} tooltip={tooltip} />}
    <AsyncPaginate {...props} className="styled-atlaskit-select" classNamePrefix={"styled-atlaskit-select"} />
    {isInvalid && <FieldErrorMessage message={errMessage} />}
    {isShowReloadWhileFetchFailed && (
      <FieldReloadMessage message={reloadMessage} onReload={() => onReload} reloaderStatus={reloaderStatus} />
    )}
    {helperText && <FieldHelperText message={helperText} />}
  </div>
);
