/*
 * Copyright (c) 2022. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import "./index.scss";
import { Badge, BADGE_APPEARANCE, BADGE_TYPE } from "../Badge";

export interface ToggleProps {
  isChecked: boolean;
  isLoading?: boolean;
  isEditable?: boolean;
  isDisabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  activeText?: string;
  inactiveText?: string;
  className?: string
  dataQa?: string;
}

export const Toggle = (props: ToggleProps) => {
  const {
    isChecked,
    isLoading = false,
    isEditable = true,
    isDisabled = false,
    label = "",
    name = "",
    value = "",
    onBlur,
    onChange,
    onFocus,
    activeText = "",
    inactiveText = "",
    className,
    dataQa,
  } = props;

  const isToggleDisabled = isLoading || isDisabled;
  const activeBadgeAppearance = isChecked ? BADGE_APPEARANCE.SUCCESS : BADGE_APPEARANCE.ERROR;
  return (
    <>
      {isEditable && (
        <div className={classNames("styled-toggle", className, { disabled: isToggleDisabled })} data-qa-id={dataQa}>
          {isLoading && <span className="styled-toggle__loading" />}

          <label data-checked={isChecked}>
            <input type="checkbox" aria-label={label} {...{name, value, onChange, onFocus, onBlur}} disabled={isToggleDisabled} />
          </label>

          {(activeText || inactiveText) && (
            <Badge
              text={isChecked ? activeText : inactiveText}
              type={BADGE_TYPE.LIGHT}
              appearance={isToggleDisabled ? BADGE_APPEARANCE.INACTIVE : activeBadgeAppearance}
            />
          )}
        </div>
      )}
      {!isEditable && (activeText || inactiveText) && <div>{isChecked ? activeText : inactiveText}</div>}
    </>
  );
};