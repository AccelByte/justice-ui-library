/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { default as classNames } from "classnames";
import { Enum } from "../../types";
import "./index.scss";

export const BADGE_TYPE = Enum("BASIC", "LIGHT", "OUTLINE");
export const BADGE_APPEARANCE = Enum("INFO", "INACTIVE", "WARNING", "ERROR", "SUCCESS", "GENERAL");
export const BADGE_SIZE = Enum("SMALL", "MEDIUM", "LARGE");
export interface BadgeProps {
  text: string;
  appearance?: keyof typeof BADGE_APPEARANCE;
  type?: keyof typeof BADGE_TYPE;
  size?: keyof typeof BADGE_SIZE;
  className?: string;
  isSemibold?: boolean;
}

export const Badge = ({
  text,
  appearance = "GENERAL",
  className: customClassName,
  type = "BASIC",
  size = "SMALL",
  isSemibold = true,
}: BadgeProps) => {
  return (
    <span
      className={classNames(
        "badge-container",
        customClassName,
        { semibold: isSemibold },
        {
          basic: type === BADGE_TYPE.BASIC,
          light: type === BADGE_TYPE.LIGHT,
          outline: type === BADGE_TYPE.OUTLINE,
        },
        {
          info: appearance === BADGE_APPEARANCE.INFO,
          inactive: appearance === BADGE_APPEARANCE.INACTIVE,
          warning: appearance === BADGE_APPEARANCE.WARNING,
          error: appearance === BADGE_APPEARANCE.ERROR,
          success: appearance === BADGE_APPEARANCE.SUCCESS,
          general: appearance === BADGE_APPEARANCE.GENERAL,
        },
        { small: size === BADGE_SIZE.SMALL, medium: size === BADGE_SIZE.MEDIUM, large: size === BADGE_SIZE.LARGE }
      )}
    >
      {text}
    </span>
  );
};
