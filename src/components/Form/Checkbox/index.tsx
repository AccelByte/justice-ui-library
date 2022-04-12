/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import "./index.scss";
import ReactTooltip from "react-tooltip";
import { renderToString } from "react-dom/server";

export interface CheckboxProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  isChecked: boolean;
  isDisabled?: boolean;
  value?: string | number | boolean;
  helperText?: string;
  tooltip?: string;
  dataQa?: string | null;
}

export const Checkbox = ({ label, helperText, isChecked, tooltip, isDisabled, value, ...props }: CheckboxProps) => {
  const dataTip = React.isValidElement(tooltip) ? renderToString(tooltip) : tooltip;
  return (
    <div className={classNames("styled-checkbox", { isChecked, isDisabled })} data-qa-id={props.dataQa}>
      <label>
        <input
          className="styled-checkbox__input"
          type="checkbox"
          value={String(value)}
          checked={isChecked}
          disabled={isDisabled}
          {...props}
        />
        <span className="styled-checkbox__icon">{isChecked && <i className="fa-icon-check" />}</span>
        {label && <span className="styled-checkbox__label">{label}</span>}
        {tooltip && (
          <>
            <i className="fa-icon-info" data-for="styled-checkbox__tooltip" data-tip={dataTip} />
            <ReactTooltip effect="solid" id="styled-checkbox__tooltip" html={true} />
          </>
        )}
      </label>
      {helperText && <span className="field-helper-text">{helperText}</span>}
    </div>
  );
};
