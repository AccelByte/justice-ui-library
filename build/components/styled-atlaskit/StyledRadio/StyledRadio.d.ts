/// <reference types="react" />
import "./StyledRadio.scss";
import { RadioOption } from "../../../types";
interface Props {
    label: string;
    options: RadioOption<string | boolean>[];
    selectedRadio: string | boolean;
    onChange: (item: RadioOption<string | boolean>) => void;
    disabled?: boolean;
    errMessage?: string;
    isRequired?: boolean;
    isInvalid?: boolean;
    tooltip?: string;
    isHorizontal?: boolean;
    isList?: boolean;
    className?: string;
    dataQa?: string | null;
    dataQaProps?: string | null;
}
export declare const StyledRadio: ({ label, options, selectedRadio, onChange, errMessage, isInvalid, disabled, isRequired, isList, tooltip, isHorizontal, className, dataQa, dataQaProps, }: Props) => JSX.Element;
export {};
