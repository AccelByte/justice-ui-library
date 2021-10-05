/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import { Enum } from "../../types";
import "./index.scss";

export const BADGE_TYPE = Enum("BASIC", "LIGHT", "OUTLINE");
export const BADGE_APPEARANCE = Enum("INFO", "INACTIVE", "WARNING", "ERROR", "SUCCESS", "GENERAL");
export interface BadgeProps {
  text: string;
  appearance?: Enum<typeof BADGE_APPEARANCE>;
  type?: Enum<typeof BADGE_TYPE>;
  className?: string;
}

export const Badge = ({
  text,
  appearance = BADGE_APPEARANCE.GENERAL,
  className: customClassName,
  type = BADGE_TYPE.BASIC,
}: BadgeProps) => {
  return (
    <span
      className={classNames(
        "badge-container",
        customClassName,
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
        }
      )}
    >
      {text}
    </span>
  );
};
