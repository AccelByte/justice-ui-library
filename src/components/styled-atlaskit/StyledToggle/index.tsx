/*
 * Copyright (c) 2022. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import "./index.scss";
import { Badge, BADGE_APPEARANCE, BADGE_TYPE } from "../../Badge";

export interface StyledToggleProps {
  isChecked: boolean;
  isLoading?: boolean;
  isEditable?: boolean;
  isDisabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  activeText?: string;
  inactiveText?: string;
  className?: string;
  dataQa?: string;
}

export const StyledToggle = ({
  isChecked,
  isLoading = false,
  isEditable = true,
  isDisabled = false,
  label = "",
  name = "",
  value = "",
  onChange,
  activeText = "",
  inactiveText = "",
  className,
  dataQa,
}: StyledToggleProps) => {
  const isToggleDisabled = isLoading || isDisabled;
  const activeBadgeAppearance = isChecked ? BADGE_APPEARANCE.SUCCESS : BADGE_APPEARANCE.ERROR;
  return (
    <>
      {isEditable && (
        <div className={classNames("styled-toggle", className, { disabled: isToggleDisabled })} data-qa-id={dataQa}>
          {isLoading && <span className="styled-toggle__loading" />}

          <label data-checked={isChecked}>
            <input type="checkbox" aria-label={label} {...{ name, value, onChange }} disabled={isToggleDisabled} />
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
      {!isEditable && (activeText || inactiveText) && (
        <div className="styled-toggle-uneditable">{isChecked ? activeText : inactiveText}</div>
      )}
    </>
  );
};
