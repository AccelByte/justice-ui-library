import * as React from 'react';
import './ValidMultiCreatableFieldText.scss';
import { FormatOptionLabelMeta } from 'react-select';
import { RadioOption, SelectOption } from '../../types';
import { PopoverPlacement } from '../InlinePopover';
import { CommonValidationErrorType, Validation } from 'justice-js-common-utils';
export interface ValidMultiCreatableFieldTextProps {
    label?: string;
    counterLabel?: string;
    name?: string;
    placeholder: string;
    errMessage?: string;
    helperText?: React.ReactNode;
    onChange?: (options: SelectOption[]) => void;
    onBlur?: () => void;
    isRequired?: boolean;
    isDisabled?: boolean;
    value: SelectOption[];
    tooltip?: string;
    dataQa?: string | null;
    backspaceRemovesValue?: boolean;
    validateInput?: (validation: Validation<{
        inputValue: CommonValidationErrorType;
    }>, input: string) => void;
    inputMax?: number;
    inputMin?: number;
    inputMaxLength?: number;
    maxItem?: number;
    popoverContent?: React.ReactNode | string;
    popoverPlacement?: PopoverPlacement;
    separatorKeys?: string[];
    formatOptionLabel?: (data: RadioOption, meta: FormatOptionLabelMeta<RadioOption, false>) => React.ReactChild;
}
export interface State {
    inputValue: string;
    isFocus: boolean;
}
export declare class ValidMultiCreatableFieldText extends React.Component<ValidMultiCreatableFieldTextProps, State> {
    validation: Validation<{
        inputValue: CommonValidationErrorType;
    }>;
    constructor(props: ValidMultiCreatableFieldTextProps);
    createOption: (value: string) => void;
    handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    handleFocus: () => void;
    handleChange: (value: SelectOption[]) => void;
    handleInputChange: (inputValue: string) => void;
    handleKeyDown: (event: React.KeyboardEvent) => void;
    render(): JSX.Element;
}
