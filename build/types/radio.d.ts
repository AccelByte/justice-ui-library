import { SelectOption } from "./select";
import * as React from "react";
export interface RadioOption<T = string> extends SelectOption<T> {
    helper?: string;
    customChild?: React.ReactNode;
}
