/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import classNames from "classnames";

interface IconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  name: string;
  className?: string;
}

export const Icon = ({ name, className, ...props }: IconProps) => {
  return <i className={classNames(name, className)} {...props} />;
};
