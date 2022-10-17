import React from "react";
import { SelectOption } from "../../types";
interface MultiValueGenericProps<OptionType extends SelectOption> {
    children: React.ReactNode;
    data: OptionType;
    innerProps: {
        className?: string | undefined;
    };
    selectProps: any;
}
export declare const DropdownIndicator: () => JSX.Element;
export declare const MultiValueLabel: React.FC<MultiValueGenericProps<SelectOption>>;
export {};
