/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { default as AkSelect, SelectProps as AkSelectProps } from "@atlaskit/select";
import { SelectOption } from "../../types";
import "./index.scss";
import { DropdownIndicator, MultiValueLabel } from "./reactSelectComponents";

export interface SelectProps extends Omit<AkSelectProps<SelectOption, boolean>, "onChange"> {
  onChange?: (option: SelectOption) => void;
  dataQa?: string | null;
  dataQaProps?: string | null;
}

export const Select = ({ isMulti = false, onChange, dataQa = null, dataQaProps = null, ...props }: SelectProps) => {
  const renderSelect = () => {
    return (
      <AkSelect
        className="styled-atlaskit-select"
        classNamePrefix="styled-atlaskit-select"
        components={{
          DropdownIndicator,
          MultiValueLabel: ({ ...multiValueLabelProps }) => MultiValueLabel(multiValueLabelProps),
        }}
        isMulti={isMulti}
        onChange={onChange ? (item) => onChange(item as SelectOption) : undefined}
        {...props}
      />
    );
  };

  if (!!dataQa)
    return (
      <div data-qa-id={dataQa} data-qa-props={dataQaProps}>
        {renderSelect()}
      </div>
    );
  return renderSelect();
};
