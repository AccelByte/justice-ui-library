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
import "../../styles/icons/fa_icons.css";
import { ButtonWithIcon } from "../ButtonWithIcon";

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
  addDataQa?: string | null;
  inputDataQa?: string | null;
  deleteDataQa?: string | null;
  dataQaProps?: string | null;
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
  addDataQa = null,
  inputDataQa = null,
  deleteDataQa = null,
  dataQaProps = null,
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

  const renderInput = (value: string, index: number) => {
    const input = (
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
    );

    if (!inputDataQa) return input;
    return (
      <div data-qa-id={inputDataQa} data-qa-props={dataQaProps ? `${dataQaProps}_${index}` : null}>
        {input}
      </div>
    );
  };

  const renderDeleteButton = (index: number) => {
    const deleteButton = (
      <Button onClick={() => removeField(index)} appearance="link" className="delete-button">
        <span className={"icon icon-trash"} />
      </Button>
    );

    if (!deleteDataQa) return deleteButton;
    return (
      <span data-qa-id={deleteDataQa} data-qa-props={dataQaProps ? `${dataQaProps}_${index}` : null}>
        {deleteButton}
      </span>
    );
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
            {renderInput(value, index)}
            {values.length > 1 && !isDisabled && renderDeleteButton(index)}
          </div>
        ))}

        {!!errMessage && <FieldErrorMessage message={errMessage} />}

        {!isDisabled && (
          <div
            className={classNames("valid-dynamic-text__input__add-btn", { shrink: values.length > 1 })}
            hidden={isDisabled}
            data-qa-id={addDataQa}
            data-qa-props={dataQaProps}
          >
            <ButtonWithIcon
              buttonIcon="icon-plus"
              onClick={addField}
              appearance="link"
              isDisabled={values.length >= maxField}
            >
              {`${addText} (${values.length}/${maxField})`}
            </ButtonWithIcon>
          </div>
        )}
      </div>
    </div>
  );
};
