/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { components } from "react-select";
import { SelectOption } from "../../types";

interface MultiValueGenericProps<OptionType extends SelectOption> {
  children: React.ReactNode;
  data: OptionType;
  innerProps: { className?: string | undefined };
  selectProps: any;
}

export const DropdownIndicator = () => <i className="icon-chevron-down" />;

export const MultiValueLabel: React.FC<MultiValueGenericProps<SelectOption>> = ({ ...props }) => {
  const currentSelectedItem = Array.isArray(props.selectProps.value)
    ? props.selectProps.value.find((selectedOption: SelectOption) => selectedOption.label === props.children)
    : props.selectProps.value;

  const MAX_LENGTH = 25;
  const { children } = props;
  const updatedProps = {
    ...props,
    children:
      typeof children === "string" && children.length > MAX_LENGTH ? `${children.slice(0, MAX_LENGTH)}...` : children,
  };

  if (!currentSelectedItem?.isUnremovable) return <components.MultiValueLabel {...updatedProps} />;

  return (
    <div className="styled-atlaskit-select__multi-value-unremovable">
      <components.MultiValueLabel {...updatedProps} />
    </div>
  );
};
