/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import "./ValidDynamicText.scss";
import { default as classNames } from "classnames";
import { FieldErrorMessage, FieldLabel } from "../Form/utility";
import { Button } from "../Button";
import { Input } from "./ValidFieldText";
import { translation } from "../../utils/i18n";

export interface ValidDynamicTextProps {
  label?: string;
  placeholder?: string;
  name: string;
  values: string[];
  onChange: (values: string[]) => void;
  isDisabled?: boolean;
  type?: "text" | "number" | "password";
  errMessage?: string;
  maxField: number;
  addText?: string;
  dataQa?: string | null;
}

export const ValidDynamicText = ({
  placeholder,
  name,
  values,
  onChange,
  isDisabled = false,
  type = "text",
  label,
  errMessage,
  maxField,
  addText = translation("common.add"),
  dataQa = null,
}: ValidDynamicTextProps) => {
  const [isFocused, setIsFocused] = React.useState<number | null>(null);

  const addField = () => {
    onChange([...values, ""]);
  };

  const removeField = (index: number) => {
    onChange([...values.filter((_, pos) => pos !== index)]);
  };

  const onValuesChange = (event: React.FormEvent<HTMLInputElement>, index: number) => {
    const { value } = event.currentTarget;

    values[index] = value;
    onChange(values);
  };

  return (
    <div className="valid-dynamic-text">
      <FieldLabel label={label} />

      <div className="valid-dynamic-text__input" data-qa-id={dataQa}>
        {values.map((value, index) => (
          <div
            key={index}
            className={classNames("valid-dynamic-text__input__field", {
              "valid-dynamic-text__input__field--focused": isFocused === index,
              "valid-dynamic-text__input__field--disabled": isDisabled,
            })}
          >
            <Input
              isLabelHidden={true}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={(e: React.FormEvent<HTMLInputElement>) => onValuesChange(e, index)}
              disabled={isDisabled}
              shouldFitContainer={true}
              type={type}
              onFocus={() => setIsFocused(index)}
              onBlur={() => setIsFocused(null)}
            />
            {values.length > 1 && !isDisabled && (
              <Button onClick={() => removeField(index)} appearance="link">
                <span className={"icon fa-icon-trash"} />
              </Button>
            )}
          </div>
        ))}

        {!!errMessage && <FieldErrorMessage message={errMessage} />}

        <div className="valid-dynamic-text__input__add-btn" hidden={isDisabled}>
          <Button onClick={addField} appearance="link" isDisabled={values.length === maxField}>
            <span className={"icon-plus"} /> {`${addText} (${values.length}/${maxField})`}
          </Button>
        </div>
      </div>
    </div>
  );
};
