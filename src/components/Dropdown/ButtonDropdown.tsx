/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import classNames from "classnames";
import "./ButtonDropdown.scss";
import { default as AKDropdown } from "@atlaskit/dropdown-menu";
import { DropdownMenuStatefulProps } from "@atlaskit/dropdown-menu/types";
import { ButtonAppearances } from "@atlaskit/button";

type DropdownAppearance = Extract<ButtonAppearances, "subtle" | "primary">;

export interface ButtonDropdownProps extends Partial<Omit<DropdownMenuStatefulProps, "triggerType">> {
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
  buttonAppearance = "primary",
  buttonClassName,
  ...props
}: ButtonDropdownProps) => {
  const renderDropdownMenu = () => (
    <AKDropdown
      triggerType="button"
      triggerButtonProps={{
        isDisabled,
        appearance: buttonAppearance,
        className: classNames("dropdownMenu", buttonClassName, buttonAppearance),
      }}
      {...props}
    >
      {children}
    </AKDropdown>
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
