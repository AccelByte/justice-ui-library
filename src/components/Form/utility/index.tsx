/*
 *  Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 *  This is licensed software from AccelByte Inc, for limitations
 *  and restrictions contact your company contract manager.
 */

import React from "react";
import "./index.scss";
import { addLineBreaks } from "../../../utils";
import ReactTooltip from "react-tooltip";
import classNames from "classnames";
import { renderToString } from "react-dom/server";
import { translation } from "../../../utils/i18n";
import { MAX_SHORT_TEXT_LENGTH } from "../../../constants";
import "../../../styles/icons/fa_icons.css";
import DOMPurify from "dompurify";

export const FieldErrorMessage = ({ message = "", dataQa }: { message?: string | null; dataQa?: string }) => (
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
  isRequired?: boolean;
}

export const FieldLabel = ({
  label = "",
  children,
  isRequired = true,
  optionalLabel = ` ${translation("common.optionalFieldLabel")}`,
  tooltip,
  tooltipRef,
}: FieldLabelProps) => (
  <label className={classNames("field-label", { withTooltip: tooltip })}>
    <div>
      {label}
      {!isRequired && optionalLabel}
      {children}
    </div>
    {tooltip && (
      <>
        <i
          ref={tooltipRef}
          className="icon-info"
          data-for="field-label__tooltip"
          data-tip={DOMPurify.sanitize(React.isValidElement(tooltip) ? renderToString(tooltip) : tooltip)}
          data-html={true}
        />
        <ReactTooltip effect="solid" id="field-label__tooltip" />
      </>
    )}
  </label>
);

export interface FieldCounterProps {
  value: string | null;
  maxLength: number;
  className?: string;
}

export const FieldCounter = ({ value = "", maxLength = MAX_SHORT_TEXT_LENGTH, className }: FieldCounterProps) => (
  <span className={classNames("field-counter", className)}>
    {value && value.length ? value.length : 0}/{maxLength}
  </span>
);

export const FieldHelperText = ({ message = "" }: { message: React.ReactNode }) => (
  <span className="field-helper-text">{typeof message === "string" ? addLineBreaks(message) : message}</span>
);
