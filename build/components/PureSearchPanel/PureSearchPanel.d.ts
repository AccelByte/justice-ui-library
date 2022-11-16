import * as React from "react";
import { Enum } from "../../types";
import "./index.scss";
import "../../styles/icons/fa_icons.css";
export declare const SearchIconPosition: Readonly<{
    LEFT: "LEFT";
    RIGHT: "RIGHT";
}>;
export interface PureSearchPanelProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "placeholder" | "autoComplete" | "onKeyPress"> {
    onSearch?: () => void;
    fixedWidth?: boolean;
    searchIconPosition?: Enum<typeof SearchIconPosition>;
    isDisabled?: boolean;
    dataQa?: string | null;
}
export declare const PureSearchPanel: ({ onSearch, fixedWidth, searchIconPosition, isDisabled, dataQa, ...props }: PureSearchPanelProps) => JSX.Element;
