/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { default as FieldText, FieldTextProps } from "@atlaskit/field-text";
import "./TextField.scss";
import classNames from "classnames";

export interface TextFieldProps extends FieldTextProps {}

export const TextField = ({ ...props }: TextFieldProps) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div className={classNames("styled-atlaskit-textfield", { "styled-atlaskit-textfield--isFocused": isFocused })}>
      <FieldText onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} {...props} />
    </div>
  );
};
