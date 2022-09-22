/*
 * Copyright (c) 2018-2022. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import { CreatableSelect } from '@atlaskit/select'
import './ValidMultiCreatableFieldText.scss'
import classnames from 'classnames'
import { FormatOptionLabelMeta } from 'react-select'
import { RadioOption, SelectOption } from '../../types'
import { InlinePopover, PopoverPlacement } from '../InlinePopover'
import { trimExcessiveSpace } from '../../utils'
import { FieldCounter, FieldErrorMessage, FieldHelperText, FieldLabel } from '../Form/utility'
import { CommonValidationErrorType, MAX_INTEGER, Validation } from 'justice-js-common-utils'
import { getCommonValidationErrorMessage } from '../../utils/inputValidation'

export interface ValidMultiCreatableFieldTextProps {
  label?: string
  counterLabel?: string
  name?: string
  placeholder: string
  errMessage?: string
  helperText?: React.ReactNode
  onChange?: (options: SelectOption[]) => void
  onBlur?: () => void
  isRequired?: boolean
  isDisabled?: boolean
  value: SelectOption[]
  tooltip?: string
  dataQa?: string | null
  backspaceRemovesValue?: boolean
  validateInput?: (validation: Validation<{ inputValue: CommonValidationErrorType }>, input: string) => void
  inputMax?: number
  inputMin?: number
  inputMaxLength?: number
  maxItem?: number
  popoverContent?: React.ReactNode | string
  popoverPlacement?: PopoverPlacement
  separatorKeys?: string[]
  formatOptionLabel?: (data: RadioOption, meta: FormatOptionLabelMeta<RadioOption, false>) => React.ReactChild
}

export interface State {
  inputValue: string
  isFocus: boolean
}

const DEFAULT_SEPARATOR_KEYS = ['Tab', 'Enter', ',']

const components = {
  DropdownIndicator: null
}

const createOption = (label: string) => {
  const trimmedLabel = trimExcessiveSpace(label)
  return {
    label: trimmedLabel,
    value: trimmedLabel
  }
}
/* eslint-disable @typescript-eslint/ban-ts-comment */
export class ValidMultiCreatableFieldText extends React.Component<ValidMultiCreatableFieldTextProps, State> {
  validation: Validation<{
    inputValue: CommonValidationErrorType
  }>

  constructor(props: ValidMultiCreatableFieldTextProps) {
    super(props)
    this.state = {
      inputValue: '',
      isFocus: false
    }

    this.validation = new Validation()
    this.validation.listen(() => this.setState({}))
  }

  createOption = (value: string) => {
    const newOption = createOption(value)
    if (!this.props.value.find(option => option.value === newOption.value)) {
      const selectedOptions = [...this.props.value, newOption]
      this.handleChange(selectedOptions)
    }
  }

  handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    if (!!value && !this.validation.get('inputValue')) {
      this.createOption(value)
    }
    const { onBlur } = this.props
    this.setState({ isFocus: false })
    if (onBlur) {
      onBlur()
    }
  }

  handleFocus = () => {
    this.setState({ isFocus: true })
  }

  handleChange = (value: SelectOption[]) => {
    const { onChange } = this.props
    if (!onChange) return
    onChange(value)
  }

  handleInputChange = (inputValue: string) => {
    const { validateInput } = this.props
    this.setState({
      inputValue
    })

    if (validateInput) {
      validateInput(this.validation, inputValue)
    }
  }

  handleKeyDown = (event: React.KeyboardEvent) => {
    const { inputValue } = this.state
    const { inputMaxLength, maxItem, value, separatorKeys = DEFAULT_SEPARATOR_KEYS } = this.props
    const separatorKeyEntered = separatorKeys.includes(event.key)

    if (separatorKeyEntered) {
      event.preventDefault()
    }

    if (maxItem && value.length >= maxItem) {
      event.preventDefault()
      return
    }
    const isInputValid = !inputValue || (inputMaxLength && inputValue.length > inputMaxLength) || this.validation.get('inputValue')

    if (isInputValid) {
      return
    }
    if (separatorKeyEntered) {
      this.createOption(this.state.inputValue)
      this.setState({
        inputValue: ''
      })
    }
  }

  render() {
    const {
      label,
      counterLabel,
      placeholder,
      errMessage,
      helperText,
      isRequired = true,
      value,
      isDisabled,
      tooltip,
      backspaceRemovesValue = true,
      inputMin,
      inputMax = MAX_INTEGER,
      inputMaxLength,
      maxItem,
      popoverContent,
      popoverPlacement,
      dataQa,
      formatOptionLabel
    } = this.props
    const { inputValue } = this.state
    const inputErrorMessage = this.validation.get('inputValue')
    return (
      <div className="valid-multi-creatable-field-text">
        <div className="fieldHeader">
          {!!label && <FieldLabel label={label} isRequired={isRequired} tooltip={tooltip} />}
          <span>
            {!!maxItem && (
              <>
                <FieldCounter value={value.map(val => val.value.charAt(0)).join('')} maxLength={maxItem} className="pr-1" />
                {!!(label || counterLabel) && <span>{counterLabel || label}</span>}
              </>
            )}
          </span>
        </div>
        <div
          className={classnames('valid-multi-creatable-field-text-input-container', {
            focusedFieldText: this.state.isFocus
          })}
        >
          <InlinePopover content={popoverContent} isOpen={this.state.isFocus} placement={popoverPlacement}>
            <div data-qa-id={dataQa && dataQa}>
              <CreatableSelect
                className="styled-atlaskit-select"
                isDisabled={isDisabled}
                classNamePrefix="styled-atlaskit-select"
                inputValue={inputValue}
                components={components}
                isClearable
                // @ts-ignore
                isMulti
                backspaceRemovesValue={backspaceRemovesValue}
                menuIsOpen={false}
                placeholder={placeholder}
                onInputChange={this.handleInputChange}
                // @ts-ignore
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                value={value}
                // @ts-ignore
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
                formatOptionLabel={formatOptionLabel}
              />
            </div>
          </InlinePopover>
        </div>

        {(errMessage || (inputValue.length > 0 && inputErrorMessage)) && (
          <FieldErrorMessage
            message={
              errMessage ||
              getCommonValidationErrorMessage(inputErrorMessage, {
                fieldName: label || '',
                min: inputMin,
                max: inputMax,
                maxLength: inputMaxLength
              })
            }
          />
        )}
        {helperText && <FieldHelperText message={helperText} />}
      </div>
    )
  }
}

