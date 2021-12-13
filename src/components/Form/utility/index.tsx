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
import { renderToString } from "react-dom/server";

export const FieldErrorMessage = ({ message = "", dataQa }: { message?: string; dataQa?: string }) => (
  <span className="field-error-message" data-qa-id={dataQa && dataQa}>
    {message}
  </span>
);

export interface FieldLabelProps {
  label?: string;
  children?: React.ReactNode;
  optionalLabel?: string;
  tooltip?: string;
  tooltipRef?: React.RefObject<HTMLElement>;
}

export const FieldLabel = ({ label = "", children, optionalLabel, tooltip, tooltipRef }: FieldLabelProps) => (
  <label className={classNames("field-label", { "d-flex align-items-center": tooltip })}>
    <div>
      {label}
      {optionalLabel}
      {children ? children : ""}
    </div>
    {tooltip && (
      <>
        <i
          ref={tooltipRef}
          className="fa-icon-info ml-2"
          data-for="field-label__tooltip"
          data-tip={React.isValidElement(tooltip) ? renderToString(tooltip) : tooltip}
        />
        <ReactTooltip effect="solid" id="field-label__tooltip" html={true} />
      </>
    )}
  </label>
);

export interface FieldCounterProps {
  value: string | null;
  maxLength: number;
  className?: string;
}

export const FieldCounter = ({ value = "", maxLength, className }: FieldCounterProps) => (
  <span className={classNames("field-counter", className)}>
    {value && value.length ? value.length : 0}/{maxLength}
  </span>
);

export const FieldHelperText = ({ message = "" }: { message: React.ReactNode }) => (
  <span className="field-helper-text">{typeof message === "string" ? addLineBreaks(message) : message}</span>
);
