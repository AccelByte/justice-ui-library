/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { default as AkButton, ButtonProps as AkButtonProps, ButtonAppearances } from "@atlaskit/button";
import classNames from "classnames";
import "./Button.scss";

export type ButtonAppearance = ButtonAppearances | "outline" | "success";

export interface ButtonProps
  extends Pick<AkButtonProps, "className" | "onClick" | "href" | "target" | "id" | "tabIndex"> {
  children: React.ReactNode;
  /** Set if the button is disabled. */
  isDisabled?: boolean;
  /**
   * Set if the button is loading. When isLoading is true, text is hidden, and
   * a spinner is shown in its place. The button maintains the width that it
   * would have if the text were visible.
   */
  isLoading?: boolean;
  /** Change the style to indicate the button is selected. */
  isSelected?: boolean;
  /** Set the amount of padding in the button. */
  spacing?: "compact" | "default" | "none";
  /** Set whether it is a button or a form submission. */
  type?: "button" | "submit" | "reset";
  /** Option to fit button width to its parent width */
  shouldFitContainer?: boolean;
  /** Set the button to autofocus on mount. */
  autoFocus?: boolean;
  /** The base styling to apply to the button. */
  appearance?: ButtonAppearance;
  dataQa?: string | null;
}

export const Button = ({
  children,
  isDisabled = false,
  isLoading = false,
  isSelected = false,
  spacing = "default",
  type = "button",
  shouldFitContainer = false,
  autoFocus = false,
  appearance = "primary",
  className = "",
  dataQa = null,
  ...props
}: ButtonProps) => {
  const renderButton = () => (
    <AkButton
      className={classNames("styled-atlaskit-button", appearance, className, { selected: isSelected })}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isSelected={isSelected}
      spacing={spacing}
      type={type}
      shouldFitContainer={shouldFitContainer}
      autoFocus={autoFocus}
      appearance={appearance !== "outline" && appearance !== "success" ? appearance : undefined}
      {...props}
    >
      {children}
    </AkButton>
  );
  return dataQa ? (
    <div data-qa-id={dataQa} className="styled-atlaskit-button-container">
      {renderButton()}
    </div>
  ) : (
    renderButton()
  );
};
