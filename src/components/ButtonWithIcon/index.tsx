/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import classNames from "classnames";
import { Button, ButtonProps } from "../Button";

export interface ButtonWithIconProps extends ButtonProps {
  buttonIcon?: string;
  iconPosition?: "left" | "right";
}

export const ButtonWithIcon = ({
  buttonIcon,
  iconPosition = "left",
  appearance = "primary",
  isDisabled,
  isLoading = false,
  className,
  ...buttonProps
}: ButtonWithIconProps) => {
  return (
    <Button
      appearance={appearance}
      isLoading={isLoading}
      className={classNames(className, { disabled: isDisabled })}
      isDisabled={isDisabled}
      {...buttonProps}
    >
      {!!buttonIcon && iconPosition === "left" && <span className={classNames("icon", buttonIcon)} />}
      {buttonProps.children}
      {!!buttonIcon && iconPosition === "right" && <span className={classNames("icon icon-right", buttonIcon)} />}
    </Button>
  );
};
