/*
 *  Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 *  This is licensed software from AccelByte Inc, for limitations
 *  and restrictions contact your company contract manager.
 */

import React from "react";
import "./index.scss";
import { addLineBreaks } from "../../Typography/typography";
import ReactTooltip from "react-tooltip";
import classNames from "classnames";

export const FieldErrorMessage = ({ message = "" }: { message?: string }) => (
  <span className="field-error-message">{message}</span>
);

export const FieldLabel = ({
  label = "",
  children,
  optionalLabel,
  tooltip,
  tooltipRef
}: {
  label?: string;
  children?: React.ReactNode;
  optionalLabel?: string;
  tooltip?: string;
  tooltipRef?: React.RefObject<HTMLElement>
}) => (
  <label className={classNames("field-label", { "d-flex align-items-center": tooltip })}>
    <div>
      {label ? `${label} ` : ""}
      {optionalLabel}
      {children ? children : ""}
    </div>
    {tooltip && (
      <>
        <i ref={tooltipRef} className="fa-icon-info ml-2" data-for="field-label__tooltip" data-tip={tooltip} />
        <ReactTooltip effect="solid" id="field-label__tooltip" />
      </>
    )}
  </label>
);

export const FieldCounter = ({
  value = "",
  maxLength,
  className = "",
}: {
  value: string | null;
  maxLength: number;
  className?: string;
}) => (
  <span className={`field-counter ${className}`}>
    {value && value.length ? value.length : 0}/{maxLength}
  </span>
);

export const FieldHelperText = ({ message = "" }: { message: string }) => (
  <span className="field-helper-text">{addLineBreaks(message)}</span>
);
