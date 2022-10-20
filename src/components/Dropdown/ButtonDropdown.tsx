/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import classNames from "classnames";
import "./ButtonDropdown.scss";
import { DropdownMenu, DropdownMenuProps } from "../Dropdown";
import { ButtonAppearances } from "@atlaskit/button";

type DropdownAppearance = Extract<ButtonAppearances, "subtle" | "primary"> | "outline";

export interface ButtonDropdownProps extends Partial<Omit<DropdownMenuProps, "triggerType">> {
  /** Set if the dropdown menu button is disabled. */
  isDisabled?: boolean;
  /** The base styling to apply to the dropdown menu button. */
  buttonAppearance?: DropdownAppearance;
  /** Set className props to the dropdown menu button */
  buttonClassName?: string;
  dataQa?: string | null;
}

export const ButtonDropdown = ({
 children,
 isDisabled,
 dataQa,
 buttonAppearance,
 buttonClassName,
 ...props
}: ButtonDropdownProps) => {
  const isOutline = buttonAppearance === "outline";
  const appearance = isOutline ? undefined : buttonAppearance;
  const renderDropdownMenu = () => (
    <DropdownMenu
      triggerType="button"
      triggerButtonProps={{
        isDisabled,
        appearance,
        className: classNames("dropdownMenu", {
          "styled-atlaskit-button": isOutline,
          [buttonAppearance as string]: isOutline,
        }, buttonClassName, buttonAppearance),
      }}
      {...props}
    >
      {children}
    </DropdownMenu>
  );

  if (dataQa) {
    return (
      <div data-qa-id={dataQa} className="dropdownContainer">
        {renderDropdownMenu()}
      </div>
    );
  }

  return renderDropdownMenu();
};
