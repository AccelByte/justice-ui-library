/// <reference types="react" />
import { SelectOption } from "../../types";
interface Props {
    label?: string;
    placeholder: string;
    options: SelectOption[];
    errMessage?: string;
    onChange: (option: SelectOption) => void;
    optionalLabel?: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
    value?: SelectOption[] | null;
    tooltip?: string;
}
declare const ValidMultiSelect: ({ label, placeholder, options, onChange, errMessage, optionalLabel, isInvalid, value, isDisabled, tooltip, }: Props) => JSX.Element;
export default ValidMultiSelect;
