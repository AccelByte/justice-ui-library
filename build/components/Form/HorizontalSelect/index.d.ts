/// <reference types="react" />
import { SelectOption } from "../../../types";
export interface HorizontalSelectProps<T> {
    options: SelectOption<T>[];
    value: T;
    onChange: (value: T) => void;
    className?: string;
    dataQa?: string | null;
}
declare function horizontalSelect<T = string>(props: HorizontalSelectProps<T>): JSX.Element;
export { horizontalSelect as HorizontalSelect };
