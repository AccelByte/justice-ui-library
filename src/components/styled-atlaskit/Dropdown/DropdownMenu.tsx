/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import classNames from "classnames";
import "./DropdownMenu.scss";
import { default as AKDropdown } from "@atlaskit/dropdown-menu";
import { DropdownMenuStatefulProps } from "@atlaskit/dropdown-menu/types";
import { ButtonAppearances } from "@atlaskit/button";

type DropdownAppearance = Extract<ButtonAppearances, "subtle" | "primary">;

export interface DropDownMenuProps extends DropdownMenuStatefulProps {
  /** Set if the dropdown menu button is disabled. */
  isDisabled?: boolean;
  /** The base styling to apply to the dropdown menu button. */
  buttonAppearance?: DropdownAppearance;
  /** Set className props to the dropdown menu button */
  buttonClassName?: string;
  dataQa?: string | null;
}

export const DropdownMenu = ({
  isDisabled,
  dataQa,
  buttonAppearance = "subtle",
  triggerType = "button",
  buttonClassName,
  children,
  ...props
}: DropDownMenuProps) => {
  const renderDropdownMenu = () => (
    <AKDropdown
      triggerType={triggerType}
      triggerButtonProps={{
        isDisabled,
        appearance: buttonAppearance,
        className: classNames("styled-atlaskit-dropdown-menu", buttonClassName, buttonAppearance),
      }}
      {...props}
    >
      {children}
    </AKDropdown>
  );

  if (dataQa) {
    return (
      <div data-qa-id={dataQa} className="styled-atlaskit-dropdown-menu-container">
        {renderDropdownMenu()}
      </div>
    );
  }

  return renderDropdownMenu();
};
