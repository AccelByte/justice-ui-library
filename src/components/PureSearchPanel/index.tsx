/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import classNames from "classnames";
import * as React from "react";
import { Enum } from "../../types";
import "./index.scss";
import { Icon } from "../Icon";

export const SearchIconPosition = Enum("LEFT", "RIGHT");

export interface PureSearchPanelProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "placeholder" | "autoComplete" | "onKeyPress"
  > {
  onSearch?: () => void;
  fixedWidth?: boolean;
  searchIconPosition?: Enum<typeof SearchIconPosition>;
  isDisabled?: boolean;
}

export const PureSearchPanel = ({
  onSearch,
  fixedWidth = false,
  searchIconPosition = "RIGHT",
  isDisabled = false,
  ...props
}: PureSearchPanelProps) => {
  return (
    <div className={classNames("search-panel__container", { "fixed-width": fixedWidth, disabled: isDisabled })}>
      <div className={`search-panel__bar ${searchIconPosition === SearchIconPosition.LEFT ? "searchIconLeft" : ""}`}>
        {searchIconPosition === SearchIconPosition.LEFT && <Icon name="fa-icon-search" onClick={onSearch} />}
        <input disabled={isDisabled} {...props} />
        {!searchIconPosition ||
          (searchIconPosition === SearchIconPosition.RIGHT && <Icon name="fa-icon-search" onClick={onSearch} />)}
      </div>
    </div>
  );
};
